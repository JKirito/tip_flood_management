import { Request, Response } from "express";
import PredictionsModel, { PredictionsType } from "@models/Predictions.model";

export const createPredictions = async (req: Request, res: Response) => {
  try {
    const predTemp: PredictionsType = req.body;
    const newprediction = new PredictionsModel(predTemp);
    const savedPredictions = await newprediction.save();
    res.status(201).json(savedPredictions);
  } catch (error) {
    console.error("Error creating predictions:", error);
    res.status(500).json({ message: "Error creating predictions" });
  }
};

// export const getAlerts = async (req: Request, res: Response) => {
//   try {
//     const alerts = await AlertModel.find().sort({ timestamp: 1 });
//     res.json(alerts);
//   } catch (error) {
//     console.error('Error getting alerts:', error);
//     res.status(500).json({ message: 'Error getting alerts' });
//   }
// };

// export const getAlertByLocation = async (req: Request, res: Response) => {
//   try {
//     const location = req.params.location;
//     const alert = await AlertModel.findOne({ location });
//     if (!alert) {
//       return res.status(404).json({ message: 'Alert not found' });
//     }
//     res.json(alert);
//   } catch (error) {
//     console.error('Error getting alert:', error);
//     res.status(500).json({ message: 'Error getting alert' });
//   }
// };

// export const deleteAlertById = async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id;
//     const alert = await AlertModel.findByIdAndDelete(id);
//     if (!alert) {
//       return res.status(404).json({ message: 'Alert not found' });
//     }
//     res.json(alert);
//   } catch (error) {
//     console.error('Error deleting alert:', error);
//     res.status(500).json({ message: 'Error deleting alert' });
//   }
// };
