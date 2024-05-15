import ProximityZoneModel from '@models/proximityzone.model';
import { Request, Response } from 'express';

export const getProximityZones = async (req: Request, res: Response) => {
  try {
    const proximityZones = await ProximityZoneModel.find();
    res.json(proximityZones);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const createProximityZone = async (req: Request, res: Response) => {
  // TODO: Implement logic to create a new proximity zone
  try {
    const proximityZone = new ProximityZoneModel(req.body);
    await proximityZone.save();
    res.status(201).send(proximityZone);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateProximityZone = (req: Request, res: Response) => {
  // TODO: Implement logic to update an existing proximity zone
};

export const deleteProximityZone = (req: Request, res: Response) => {
  // TODO: Implement logic to delete a proximity zone
};
