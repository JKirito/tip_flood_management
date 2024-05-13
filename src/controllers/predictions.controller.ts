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

export const getPredictions = async (req: Request, res: Response) => {
  try {
    const predictions = await PredictionsModel.find();
    res.json(predictions);
  } catch (error) {
    console.error("Error getting predictions:", error);
    res.status(500).json({ message: "Error getting predictions" });
  }
};
