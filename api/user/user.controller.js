
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const UserModel = require('./user.model');
const { successResponse, errorResponse } = require('./../../utils/response');

const loginController = async (req, res) => {
  try {
    if (req.body.email && req.body.password) {
      const user = await UserModel.findOne({ email: req.body.email });
      if (!user) {
        throw new Error({ error: 'Email Not Found' });
      }
      const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isPasswordMatch) {
        throw new Error({ error: 'Invalid login credentials' });
      }
      const token = jwt.sign({ email: user.email }, 'Secret key');
      user['token'] = token;
      successResponse(res, user, 'User login Successfully', 200);
    }
  } catch (error) {
    errorResponse(res, error.message, 400);
  }
}
const signUpController = async (req, res) => {
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 8);
    }
    const user = await new UserModel(req.body).save();
    const token = jwt.sign({ email: user.email }, 'Secret key');
    user['token'] = token;
    console.log("token", token, user);
    successResponse(res, user, 'User Register Successfully', 200);
  } catch (error) {
    errorResponse(res, error.message, 400);
  }
}
const userListController = async (req, res) => {
  try {
    const Users = await UserModel.find({});
    res.send(Users);
  } catch (error) {

  }
}

module.exports = {
  loginController,
  signUpController,
  userListController
}