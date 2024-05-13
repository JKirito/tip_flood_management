import {
  createPredictions,
  getPredictions,
} from "@controllers/predictions.controller";
import express from "express";

const router = express.Router();

router.post("/createPredictions", createPredictions);
router.get("/getPredictions", getPredictions);

export default router;
