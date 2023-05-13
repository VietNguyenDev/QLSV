import studentService from "../../services/student.service.js";
import { abort } from "../../../helpers/error.js";

export async function updateStudent(req, res) {
    try {
        const { id } = req.params;

        const { fullName, dateOfBirth, idClass, idKhoa } = req.body;

        const data = await studentService.updateStudent(id, { fullName, dateOfBirth, idClass, idKhoa });

        return res.status(200).send({
            message: "Update student successfully",
            data: data,
        });
    } catch(error) {
        return abort(error.status, error.message);
    }
}