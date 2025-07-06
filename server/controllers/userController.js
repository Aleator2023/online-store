const ApiError = require('../error/ApiError');

class userController {
    async registration(req, res) {
        const { email, password } = req.body;
        // Logic for user registration
        res.json({ message: "User registered successfully!" });
    }

    async login(req, res) {
        const { email, password } = req.body;
        // Logic for user login
        res.json({ message: "User logged in successfully!" });
    }

    async check(req, res, next) {
        const {id} = req.query;
        if (!id) {
            return next(ApiError.BadRequest("User ID is required"));
        }
        res.json({ message: "User is authenticated", userId: id });
    }
}   

module.exports = new userController();