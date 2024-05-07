import {
  createAlert,
  getAlertByLocation,
  getAlerts,
} from '@controllers/alert.controller';
import express from 'express';

const router = express.Router();

router.post('/', createAlert);
router.get('/', getAlerts);
router.get('/location/:location', getAlertByLocation);

export default router;
