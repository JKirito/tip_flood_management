import {
  run_decision_tree,
  run_logistic_regression,
  run_svm,
} from '@controllers/ml.controller';
import express from 'express';

const router = express.Router();

router.get('/logistic_regression', run_logistic_regression);
router.get('/decision_tree', run_decision_tree);
router.get('/svm', run_svm);

export default router;
