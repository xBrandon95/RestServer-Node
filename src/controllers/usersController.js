const { response } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/User');

exports.getUsers = async (req, res = response) => {
  // const { limite = 5, desde = 0 } = req.query;
  const query = { state: true };
  try {
    const [total, users] = await Promise.all([
      User.countDocuments(query),
      User.find(query),
      // .skip(Number(desde)).limit(Number(limite)),
    ]);

    res.json({ total, users });
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line consistent-return
exports.createUser = async (req, res = response) => {
  try {
    const { name, email, password, role } = req.body;

    const user = new User({
      name,
      email,
      password,
      role,
    });

    // Hash password
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};

exports.updateUser = async (req, res = response) => {
  const { id } = req.params;
  const { _id, password, google, email, ...restUser } = req.body;

  // Validate to DB
  if (password) {
    // Hash password
    const salt = bcryptjs.genSaltSync();
    restUser.password = bcryptjs.hashSync(password, salt);
  }

  const user = await User.findOneAndUpdate({ _id: id }, restUser, {
    new: true,
  });

  res.json(user);
};

exports.deleteUser = async (req, res = response) => {
  const { id } = req.params;

  try {
    await User.findOneAndUpdate({ _id: id }, { state: false });
    res.json({
      msg: 'Usuario Eliminado',
    });
  } catch (error) {
    console.log(error);
  }
};
