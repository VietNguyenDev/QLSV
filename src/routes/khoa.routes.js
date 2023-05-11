import express from 'express';
import { getAllKhoa } from '../http/controllers/Khoa/getAllKhoa.controller.js';
import { getDetailKhoa } from '../http/controllers/Khoa/getDetailKhoa.controller.js';
import { createKhoa } from '../http/controllers/Khoa/createKhoa.model.js';
import { updateKhoa } from '../http/controllers/Khoa/updateKhoa.model.js';
import { deleteKhoa } from '../http/controllers/Khoa/deleteKhoa.model.js';

const router = express.Router();

router.get('/getKhoa', getAllKhoa);
router.get('/getKhoa/:id', getDetailKhoa);
router.post('/createKhoa', createKhoa);
router.put('/updateKhoa/:id', updateKhoa);
router.delete('/deleteKhoa/:id', deleteKhoa);

export default router;