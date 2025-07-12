const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware.js')


router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check);
router.get('/:id', userController.getUserById);
router.get('/', userController.getAllUsers);
router.put('/:id', userController.updateUser);

module.exports = router