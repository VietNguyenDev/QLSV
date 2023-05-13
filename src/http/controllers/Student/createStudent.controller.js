import studentService from "../../services/student.service.js";
import { abort } from "../../../helpers/error.js";

export async function createStudent(req, res) {
    try {
        const { id, fullName, dateOfBirth, idClass, idKhoa } = req.body;

        const data = await studentService.createStudent({
            id,
            fullName,
            dateOfBirth,
            idClass,
            idKhoa,
        });

        return res.status(200).send({
            message: "Create student successfully",
            data: data,
        });
    } catch(error) {
        return abort(error.status, error.message);
    }
}