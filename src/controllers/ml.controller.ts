import { Request, Response } from 'express';
import mlFetcher from '@utils/mlfetcher';

export const run_logistic_regression = async (req: Request, res: Response) => {
  await mlFetcher
    .post('/logistic_regression', req.body)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error running logistic regression' });
    });
};

export const get_logistic_regression_importance = async (
  req: Request,
  res: Response
) => {
  await mlFetcher
    .get('/logistic_regression')
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: 'Error getting logistic regression importance' });
    });
};

export const run_decision_tree = async (req: Request, res: Response) => {
  await mlFetcher
    .post('/decision_tree', req.body)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error running decision tree' });
    });
};

export const get_decision_tree_importance = async (
  req: Request,
  res: Response
) => {
  await mlFetcher
    .get('/decision_tree')
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: 'Error getting decision tree importance' });
    });
};

export const run_svm = async (req: Request, res: Response) => {
  await mlFetcher
    .post('/svm', req.body)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error running SVM alogrithm' });
    });
};

export const get_svm_importance = async (req: Request, res: Response) => {
  await mlFetcher
    .get('/svm')
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error getting SVM importance' });
    });
};
