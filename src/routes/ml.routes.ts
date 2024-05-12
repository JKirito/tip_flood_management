import {
  get_decision_tree_importance,
  get_logistic_regression_importance,
  get_svm_importance,
  run_decision_tree,
  run_logistic_regression,
  run_svm,
} from '@controllers/ml.controller';
import express from 'express';

const router = express.Router();

router.post('/logistic_regression', run_logistic_regression);
router.post('/decision_tree', run_decision_tree);
router.post('/svm', run_svm);

router.get('/logistic_regression', get_logistic_regression_importance);
router.get('/decision_tree', get_decision_tree_importance);
router.get('/svm', get_svm_importance);

export default router;
