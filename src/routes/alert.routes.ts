import {
  createAlert,
  getAlertByLocation,
  getAlerts,
  getAlertByProximityZone,
} from '@controllers/alert.controller';
import express from 'express';

const router = express.Router();

router.post('/', createAlert);
router.get('/', getAlerts);
router.get('/location/:location', getAlertByLocation);
router.get('/proximityZone/:proximityZoneId', getAlertByProximityZone);

export default router;
