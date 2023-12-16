// fileRoutes.ts

import { Router, Request, Response } from 'express';
import { FileController, MulterRequest } from '../controllers/fileController';
import multer from 'multer';

const router = Router();
const fileController = new FileController();

const upload = multer({ dest: 'uploads/' });

router.post('/api/files', upload.single('file'), (req: Request, res: Response) => {
    fileController.uploadFile(req as MulterRequest, res);
});

export default router;