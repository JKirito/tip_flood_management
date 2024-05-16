import { FloodZoneModel } from '@models/Floodzzone.modal';
import { Request, Response } from 'express';

export const getFloodZones = async (req: Request, res: Response) => {
  // TODO: Implement logic to fetch flood zones

  try {
    const floodZones = await FloodZoneModel.find();
    res.json(floodZones);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const createFloodZone = async (req: Request, res: Response) => {
  // TODO: Implement logic to create a new flood zone
  try {
    const floodZone = new FloodZoneModel(req.body);
    await floodZone.save();
    res.status(201).send(floodZone);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getFloodZoneByProximityZone = async (
  req: Request,
  res: Response
) => {
  try {
    const { proximityzoneId } = req.params;
    console.log('proximityZoneId:', proximityzoneId);
    const floodZones = await FloodZoneModel.find({
      proximityZone: proximityzoneId,
    });
    console.log('floodZones:', floodZones);
    res.json(floodZones);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateFloodZone = (req: Request, res: Response) => {
  // TODO: Implement logic to update an existing flood zone
};

export const deleteFloodZone = (req: Request, res: Response) => {
  // TODO: Implement logic to delete a flood zone
};
