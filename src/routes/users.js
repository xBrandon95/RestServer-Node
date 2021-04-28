const { Router } = require('express');
const { check } = require('express-validator');
const {
  validateRole,
  emailExist,
  userExistId,
} = require('../helpers/db-validators');
const { validation } = require('../middlewares/validation');

const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require('../controllers/usersController');

const router = Router();

// get all users
router.get('/', getUsers);

// Create User
router.post(
  '/',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'Correo no valido').isEmail(),
    check('email').custom(emailExist),
    check('password', 'El password debe ser minimo de 6 caracteres').isLength({
      min: 6,
    }),
    check('role').custom(validateRole),
    validation,
  ],
  createUser,
);

// Update User
router.put(
  '/:id',
  [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(userExistId),
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('role').custom(validateRole),
    validation,
  ],
  updateUser,
);

router.delete(
  '/:id',
  [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(userExistId),
    validation,
  ],
  deleteUser,
);

module.exports = router;
