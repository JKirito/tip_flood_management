import {
  createEvacuationZone,
  deleteEvacuationZone,
  getEvacuationZoneById,
  getEvacuationZones,
  updateEvacuationZone,
} from '@controllers/evecuation.controller';
import express from 'express';
import { Request, Response } from 'express';

const router = express.Router();

router.get('/', getEvacuationZones);
router.get('/:id', getEvacuationZoneById);
router.post('/create', createEvacuationZone);
router.put('/:id', updateEvacuationZone);
router.delete('/:id', deleteEvacuationZone);

export default router;
