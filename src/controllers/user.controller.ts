//responsible for handling incoming HTTP requests and returning responses to the client
import { Request, Response } from 'express';
import UserModel, { UserType } from '@models/User.model';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    res.json(users); //return the json notation of users
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findOne({
      email: req.params.email,
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = new UserModel(req.body as UserType);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findOneAndUpdate(
      {
        email: req.params.email,
      },
      req.body,
      {
        new: true,
      }
    );
    if (!user) {
      res.status(404).send('User not found');
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findOneAndDelete({
      email: req.params.email,
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const toggleSubscribeStatus = async (req: Request, res: Response) => {
  try {
    const toggleStatus = await UserModel.toggleSubscribe(req.params.id);
  } catch (error) {
    res.status(500).send(error);
  }
};
