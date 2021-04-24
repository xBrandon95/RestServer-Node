const { response } = require('express');

exports.getUsers = (req, res = response) => {
  res.json({
    msg: 'get API',
  });
};

exports.createUser = (req, res = response) => {
  const user = req.body;
  res.status(201).json({
    msg: 'post API',
    user,
  });
};

exports.updateUser = (req, res = response) => {
  const { id } = req.params;
  res.json({
    msg: 'put API',
    id,
  });
};

exports.deleteUser = (req, res = response) => {
  res.json({
    msg: 'delete API',
  });
};
