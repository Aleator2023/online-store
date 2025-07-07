const jwt = require('jsonwebtoken');

module.exports = function (role) {
    return function (req, res, next) {
    if (req.method === "OPTIONS") {
        next();
    }

    try {
        const token = req.headers.authorization.split(' ')[1]; // Bearer token
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if (role && decoded.role !== role) {
            return res.status(403).json({ message: "Forbidden" });
        }
        req.user = decoded; // Attach user info to request object
        next();
    } catch (e) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};
}

