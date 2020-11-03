// Our user APIs
const router = require('express').Router();
const userController = require('../../controllers/user_controller')

console.log("Inside users_routes.js");

router.route('/')
    .get(userController.getUser);

router.route('/users')
    .get(userController.getUsers);

router.route('/addUser')
    .get(userController.addUser);

router.route('/:userName')
    .get(userController.getUserInfo);

module.exports = router;
