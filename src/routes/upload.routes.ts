import { uploadFile } from '@controllers/upload.controller';
import express from 'express';
import { Request, Response } from 'express';
import multer from 'multer';

const router = express.Router();
const upload = multer();

// Define your upload route here
router.post('/', upload.single('file'), uploadFile);

export default router;
