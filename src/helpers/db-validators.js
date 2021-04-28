const Role = require('../models/Role');
const User = require('../models/User');

exports.validateRole = async (role = '') => {
  const roleExist = await Role.findOne({ role });
  if (!roleExist) {
    throw new Error(`El rol ${role} no es valido`);
  }
};

exports.emailExist = async (email = '') => {
  // Check if the correo exists
  const emailExist = await User.findOne({ email });
  if (emailExist) {
    throw new Error(`El correo: ${email}, ya esta registrado`);
  }
};

exports.userExistId = async id => {
  // Check if the id exists
  const userExist = await User.findOne({ _id: id });
  if (!userExist) {
    throw new Error(`El id: ${id}, no existe`);
  }
};
