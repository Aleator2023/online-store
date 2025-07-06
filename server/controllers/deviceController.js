const uuid = require('uuid');
const path = require('path');
const { Device, DeviceInfo } = require('../models/models');
const ApiError = require('../error/ApiError');

class DeviceController {
    async create(req, res, next) {
        try {
        const { name, price, brandId, typeId, info} = req.body;
        const { img } = req.files; 
        let fileName = uuid.v4() + ".jpg"; // Generate a unique file name
        img.mv(`${path.resolve(__dirname, '..', 'static')}/${fileName}`); // Move the file to the static directory

        if (info) {
            info = JSON.parse(info);
            info.forEach(i => 
                DeviceInfo.create({
                    title: i.title,
                    description: i.description,
                    deviceId: device.id // Use the device ID after creating the device
                })
                
            ); // Parse the info if it's provided
        }

        const device = await Device.create({ name, price, brandId, typeId, img: fileName });

      

        return res.json(device)
        } catch (e) {
            next(ApiError.BadRequest(e.message)); // Pass the error to the error handling middleware
        }
    }

async update(req, res, next) {
    try {
        const { id } = req.params;
        const { typeId, brandId } = req.body;

        const device = await Device.findByPk(id);
        if (!device) {
            return next(ApiError.BadRequest('Устройство не найдено'));
        }

        device.typeId = typeId ?? device.typeId;
        device.brandId = brandId ?? device.brandId;
        await device.save();

        return res.json(device);
    } catch (e) {
        next(ApiError.BadRequest(e.message));
    }
}


    async getAll(req, res) {
        let { brandId, typeId, limit, page } = req.query;
        page = page || 1; // Default to page 1 if not provided
        limit = limit || 9; // Default to 9 items per page if not provided
        let offset = page * limit - limit; // Calculate the offset for pagination

        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({ where: { limit, offset }});
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({ where: { brandId, limit, offset } });
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({ where: { typeId, limit, offset } });
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({ where: { brandId, typeId, limit, offset } });
        }
        return res.json(devices);
    }

    async getOne(req, res) {
        const { id } = req.params;
        const device = await Device.findOne({ where: { id }, include: [{ model: DeviceInfo, as: 'info' }] });
        return res.json(device);
    }
}

module.exports = new DeviceController();