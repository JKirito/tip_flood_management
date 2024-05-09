import { Request, Response } from 'express';
import EvacuationZoneModel from '@models/evecuation.model';

export const getEvacuationZones = async (req: Request, res: Response) => {
  try {
    const evacuationZones = await EvacuationZoneModel.find();
    res.json(evacuationZones);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getEvacuationZoneById = async (req: Request, res: Response) => {
  try {
    const evacuationZone = await EvacuationZoneModel.findById(req.params.id);
    if (!evacuationZone) {
      return res.status(404).json({ message: 'Evacuation zone not found' });
    }
    res.json(evacuationZone);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const createEvacuationZone = async (req: Request, res: Response) => {
  try {
    const newEvacuationZone = new EvacuationZoneModel(req.body);
    const savedEvacuationZone = await newEvacuationZone.save();
    res.status(201).json(savedEvacuationZone);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateEvacuationZone = async (req: Request, res: Response) => {
  try {
    const evacuationZone = await EvacuationZoneModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!evacuationZone) {
      res.status(404).send('Evacuation zone not found');
    } else {
      res.json(evacuationZone);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteEvacuationZone = async (req: Request, res: Response) => {
  try {
    const evacuationZone = await EvacuationZoneModel.findByIdAndDelete(
      req.params.id
    );
    if (!evacuationZone) {
      res.status(404).send('Evacuation zone not found');
    } else {
      res.json(evacuationZone);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
