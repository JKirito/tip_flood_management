//routing the HTTP requests to the appropriate controller functions
import express, { Request, Response } from 'express';
import {
  createUser,
  deleteUser,
  getUserByEmail,
  getUsers,
  updateUser,
} from '@controllers/user.controller';

const router = express.Router();

router.get('/', getUsers);

router.get('/:email', getUserByEmail);

router.post('/', createUser);

router.put('/:email', updateUser);

router.delete('/:email', deleteUser);

export default router;
