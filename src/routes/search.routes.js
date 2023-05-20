import express from "express";
import { getAllStudentByIdDepartment } from "../http/controllers/Search/getStudentByIdDepartment.controller.js";
import { getAllStudentByIdClass } from "../http/controllers/Search/getStudentByIdClass.controller.js";

const router = express.Router();

router.get('/getStudentByKhoa/:idKhoa', getAllStudentByIdDepartment);
router.get('/getStudentByClass/:idClass', getAllStudentByIdClass);

export default router;