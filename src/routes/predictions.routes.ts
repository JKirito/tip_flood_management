import {
  createPredictions,
  getPredictions,
} from "@controllers/predictions.controller";
import express from "express";

const router = express.Router();

router.post("/", createPredictions);
router.get("/", getPredictions);

export default router;
