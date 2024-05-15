//routing the HTTP requests to the appropriate controller functions
import express, { Request, Response } from 'express';
import {
  createUser,
  deleteUser,
  getUserByEmail,
  getUserByName,
  getUsers,
  updateUser,
  updateUserStatus,
} from '@controllers/user.controller';

const router = express.Router();

router.get('/', getUsers);

router.get('/:username', getUserByName);

router.post('/', createUser);

router.put('/:email', updateUser);

router.post('/update-status', updateUserStatus);

router.delete('/:email', deleteUser);

export default router;
