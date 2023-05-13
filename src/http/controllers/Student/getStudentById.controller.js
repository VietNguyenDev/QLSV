import studentService from "../../services/student.service.js";
import { abort } from "../../../helpers/error.js";

export async function getStudentById(req, res) {
    try {
        const { id } = req.params;

        const data = await studentService.getStudentById(id);

        return res.status(200).send(data);
    } catch (error) {
        return abort(error.status, error.message);
    }
}