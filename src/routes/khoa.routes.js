import express from 'express';
import { getAllDepartment } from '../http/controllers/Department/getAllDepartment.controller.js';
import { getDetailDepartment} from '../http/controllers/Department/getDetailDepartment.controller.js';
import { createDepartment } from '../http/controllers/Department/createDepartment.controller.js';
import { updateDepartment } from '../http/controllers/Department/updateDepartment.controller.js';
import { deleteDepartment } from '../http/controllers/Department/deleteDepartment.controller.js';

const router = express.Router();

router.get('/getKhoa', getAllDepartment);
router.get('/getKhoa/:id', getDetailDepartment);
router.post('/createKhoa', createDepartment);
router.put('/updateKhoa/:id', updateDepartment);
router.post('/deleteKhoa/:id', deleteDepartment);

export default router;