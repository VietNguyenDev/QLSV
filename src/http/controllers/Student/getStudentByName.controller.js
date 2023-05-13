import studentService from "../../services/student.service.js";
import { abort } from "../../../helpers/error.js";

export async function getStudentByName(req, res) {
    try {
        const { fullName } = req.params;

        const data = await studentService.getStudentByName(fullName);

        return res.status(200).send(data);
    } catch(error) {
        return abort(error.status, error.message);
    }
}