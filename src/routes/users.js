const { Router } = require('express');
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require('../controllers/usersController');

const router = Router();

router.get('/', getUsers);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/', deleteUser);

module.exports = router;
