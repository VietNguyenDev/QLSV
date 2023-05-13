import express from 'express';
import { getAllStudent } from '../http/controllers/Student/getAllStudent.controller.js';
import { getStudentById } from '../http/controllers/Student/getStudentById.controller.js';
import { getStudentByName } from '../http/controllers/Student/getStudentByName.controller.js';
import { createStudent } from '../http/controllers/Student/createStudent.controller.js';
import { updateStudent } from '../http/controllers/Student/updateStudent.controller.js';
import { deleteStudent } from '../http/controllers/Student/deleteStudent.controller.js';

const router = express.Router();

router.get('/getStudent', getAllStudent);
router.get('/getStudent/:id', getStudentById);
router.get('/getStudentByName/:fullName', getStudentByName);
router.post('/createStudent', createStudent);
router.put('/updateStudent/:id', updateStudent);
router.post('/deleteStudent/:id', deleteStudent);

export default router;