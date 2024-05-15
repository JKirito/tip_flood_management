//responsible for handling incoming HTTP requests and returning responses to the client
import { Request, Response } from 'express';
import UserModel, { UserType } from '@models/User.model';
import { ProximityZoneModel } from '@models/proximityzone.model';

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

export const getUserByName = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findOne({
      name: req.params.username,
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
    console.log('Trying to create a user');
    const udpdatedFields = { ...req.body, username: req.body.name };
    if (req.body.adminPassword && req.body.adminPassword === 'admin') {
      udpdatedFields.role = 'admin';
    } else {
      udpdatedFields.role = 'user';
    }
    const newUser = new UserModel(udpdatedFields as UserType);
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

export const updateUserStatus = async (req: Request, res: Response) => {
  try {
    const { email, newStatus } = req.body as {
      email: string;
      newStatus: 'active' | 'blocked' | 'pending';
    };
    await UserModel.changeStatus(email, newStatus);
    console.log('User status updated successfully');
    res.sendStatus(200);
  } catch (error) {
    console.error('Error updating user status:', error);
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

export const attachToProximityZone = async (req: Request, res: Response) => {
  try {
    const { name, proximityZoneId } = req.body as {
      name: string;
      proximityZoneId: string;
    };
    const user = await UserModel.findOne({ name: name });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const proximityZone = await ProximityZoneModel.findById(proximityZoneId);
    if (!proximityZone) {
      return res.status(404).json({ message: 'Proximity zone not found' });
    }
    user.proximityZone = proximityZone._id;
    await user.save();
    res.status(200).json({user, proximityZone});
  } catch (error) {
    res.status(500).send(error);
  }
};
