import {
  createFloodZone,
  getFloodZoneByProximityZone,
  getFloodZones,
} from '@controllers/floodzone.controller';
import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', getFloodZones);
router.get('/:proximityzoneId', getFloodZoneByProximityZone);
router.post('/', createFloodZone);

export default router;
