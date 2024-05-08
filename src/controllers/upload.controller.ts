import express, { Request, Response } from 'express';
import multer from 'multer';
import mongoose from 'mongoose';
import * as gfs from 'gridfs-stream';
import { getGfsBucket } from 'index';
import { Readable } from 'stream';

export const uploadFile = async (req: Request, res: Response) => {
  const gfsBucket = getGfsBucket();
  // Create a GridFS upload stream
  const uploadStream = gfsBucket.openUploadStream(req.file.originalname);

  // Create a readable stream from req.file.buffer
  const readableStream = new Readable();
  readableStream.push(req.file.buffer);
  readableStream.push(null);

  // Pipe the readable stream to the upload stream
  readableStream.pipe(uploadStream);

  uploadStream.on('error', (error: any) => {
    return res.status(500).json({ message: 'Error uploading file' });
  });

  uploadStream.on('finish', (file: any) => {
    return res
      .status(201)
      .json({ message: 'File uploaded successfully', fileId: file._id });
  });
};
