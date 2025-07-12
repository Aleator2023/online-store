const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Basket } = require('../models/models');

const generateJwt = (id, email, role) => {
  return jwt.sign(
    { id, email, role },
    process.env.SECRET_KEY,
    { expiresIn: '24h' }
  );
};

class userController {
  async registration(req, res, next) {
    try {
      const { email, password, role } = req.body;

      if (!email || !password) {
        return next(ApiError.BadRequest("Email and password are required"));
      }

      const candidate = await User.findOne({ where: { email } });
      if (candidate) {
        return next(ApiError.BadRequest("User with this email already exists"));
      }

      const hashedPassword = await bcrypt.hash(password, 5);
      const user = await User.create({ email, role, password: hashedPassword });
      await Basket.create({ userId: user.id });

      const token = generateJwt(user.id, user.email, user.role);
      return res.json({ token });
    } catch (e) {
      return next(ApiError.BadRequest(e.message));
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });
      if (!user) {
        return next(ApiError.BadRequest("User not found"));
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return next(ApiError.BadRequest("Incorrect password"));
      }

      const token = generateJwt(user.id, user.email, user.role);
      return res.json({ token });
    } catch (e) {
      return next(ApiError.BadRequest(e.message));
    }
  }

  async check(req, res, next) {
    try {
      const token = generateJwt(req.user.id, req.user.email, req.user.role);
      return res.json({ token });
    } catch (e) {
      return next(ApiError.BadRequest(e.message));
    }
  }

  // Новый метод: получить пользователя по ID
  async getUserById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return next(ApiError.BadRequest('User not found'));
      }
      res.json(user);
    } catch (e) {
      return next(ApiError.BadRequest(e.message));
    }
  }

  // Новый метод: получить всех пользователей
  async getAllUsers(req, res, next) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (e) {
      return next(ApiError.BadRequest(e.message));
    }
  }
  async updateUser(req, res, next) {
    try {
      const { id } = req.params;
      const { email, role, password } = req.body;

      const user = await User.findByPk(id);
      if (!user) {
        return next(ApiError.BadRequest('User not found'));
      }

      if (email) user.email = email;
      if (role) user.role = role;
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 5);
        user.password = hashedPassword;
      }

      await user.save();
      return res.json(user);
    } catch (e) {
      return next(ApiError.BadRequest(e.message));
    }
  }

}

module.exports = new userController();