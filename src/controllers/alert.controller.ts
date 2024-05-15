import { Request, Response } from 'express';
import AlertModel, { AlertType } from '@models/Alert.model';

export const createAlert = async (req: Request, res: Response) => {
  try {
    const alertData: AlertType = req.body;
    const newAlert = new AlertModel(alertData);
    const savedAlert = await newAlert.save();
    res.status(201).json(savedAlert);
  } catch (error) {
    console.error('Error creating alert:', error);
    res.status(500).json({ message: 'Error creating alert' });
  }
};

export const getAlerts = async (req: Request, res: Response) => {
  try {
    const alerts = await AlertModel.find().sort({ timestamp: 1 });
    res.json(alerts);
  } catch (error) {
    console.error('Error getting alerts:', error);
    res.status(500).json({ message: 'Error getting alerts' });
  }
};

export const getAlertByLocation = async (req: Request, res: Response) => {
  try {
    const location = req.params.location;
    const alert = await AlertModel.findOne({ location });
    if (!alert) {
      return res.status(404).json({ message: 'Alert not found' });
    }
    res.json(alert);
  } catch (error) {
    console.error('Error getting alert:', error);
    res.status(500).json({ message: 'Error getting alert' });
  }
};

export const deleteAlertById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const alert = await AlertModel.findByIdAndDelete(id);
    if (!alert) {
      return res.status(404).json({ message: 'Alert not found' });
    }
    res.json(alert);
  } catch (error) {
    console.error('Error deleting alert:', error);
    res.status(500).json({ message: 'Error deleting alert' });
  }
};

export const getAlertByProximityZone = async (req: Request, res: Response) => {
  try {
    const { proximityZoneId } = req.params;
    console.log('proximityZoneId:', proximityZoneId);
    const alerts = await AlertModel.find({ proximityZone: proximityZoneId });

    // const alerts = await AlertModel.aggregate([
    //   { $match: { proximityZone: proximityZoneId } },
    // ]);

    res.status(200).json(alerts);
  } catch (error) {
    res.status(500).send(error);
  }
};
