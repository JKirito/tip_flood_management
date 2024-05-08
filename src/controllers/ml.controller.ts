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

export const run_decision_tree = async (req: Request, res: Response) => {
  await mlFetcher
    .post('/decision_tree', req.body)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error running logistic regression' });
    });
};

export const run_svm = async (req: Request, res: Response) => {
  await mlFetcher
    .post('/svm', req.body)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error running logistic regression' });
    });
};
