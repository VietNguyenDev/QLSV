import express from 'express';
import { getAllKhoa } from '../http/controllers/Khoa/getAllKhoa.controller.js';
import { getDetailKhoa } from '../http/controllers/Khoa/getDetailKhoa.controller.js';
import { createKhoa } from '../http/controllers/Khoa/createKhoa.controller.js';
import { updateKhoa } from '../http/controllers/Khoa/updateKhoa.controller.js';
import { deleteKhoa } from '../http/controllers/Khoa/deleteKhoa.controller.js';

const router = express.Router();

router.get('/getKhoa', getAllKhoa);
router.get('/getKhoa/:id', getDetailKhoa);
router.post('/createKhoa', createKhoa);
router.put('/updateKhoa/:id', updateKhoa);
router.post('/deleteKhoa/:id', deleteKhoa);

export default router;