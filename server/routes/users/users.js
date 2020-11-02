// Our user APIs
const router = require('express').Router();
const userController=require('userController') // Enter full path

router.route('/')
    .put(userContreoller.updateUser);

router.route('/users')
    .get(userController.getUsers);

router.route('/:userName')
    .get(userController.getUserInfo);

module.exports = router;
