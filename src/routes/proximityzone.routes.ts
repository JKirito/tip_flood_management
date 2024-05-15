import {
  createProximityZone,
  getProximityZones,
} from '@controllers/proximityzone.controller';
import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', getProximityZones);
router.post('/', createProximityZone);

export default router;
