//routing the HTTP requests to the appropriate controller functions
import express, { Request, Response } from 'express';
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from '@controllers/user.controller';

const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getUserById);


router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;
