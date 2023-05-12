import express from 'express';
import { createSubject } from '../http/controllers/Subject/createSubject.controller.js';
import { deleteSubject } from '../http/controllers/Subject/deleteSubject.controller.js';
import { getAllSubject } from '../http/controllers/Subject/getAllSubject.controller.js';
import { getSubjectById } from '../http/controllers/Subject/getSubjectById.controller.js';
import { updateSubject } from '../http/controllers/Subject/updateSubject.controller.js';

const router = express.Router();

router.get('/getSubject', getAllSubject);
router.get('/getSubject/:id', getSubjectById);
router.post('/createSubject', createSubject);
router.put('/updateSubject/:id', updateSubject);
router.post('/deleteSubject/:id', deleteSubject);

export default router;