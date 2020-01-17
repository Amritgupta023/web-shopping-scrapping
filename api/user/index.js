const express = require('express');
const router = express.Router()

const {loginController,signUpController,userListController} = require('./user.controller');

router.use('/login',loginController);
router.use('/signUp',signUpController);
router.use('/list',userListController);

module.exports = router;
