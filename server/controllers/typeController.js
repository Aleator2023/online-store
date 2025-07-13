const { Type } = require('../models/models');
const ApiError = require('../error/ApiError');


class TypeController {
    async create(req, res) {
        const { name } = req.body;
        const type = await Type.create({ name });
        return res.json(type);
    }

    async getAll(req, res) {
        const types = await Type.findAll();
        return res.json(types);
    }
    
    async update(req, res, next) {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const type = await Type.findByPk(id);
        if (!type) {
            return next(ApiError.BadRequest('Тип не найден'));
        }

        type.name = name ?? type.name;
        await type.save();

        return res.json(type);
    } catch (e) {
        next(ApiError.BadRequest(e.message));
    }
}
}



module.exports = new TypeController();