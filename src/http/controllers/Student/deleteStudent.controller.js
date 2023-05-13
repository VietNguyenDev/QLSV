import studentService from "../../services/student.service.js";
import { abort } from "../../../helpers/error.js";

export async function deleteStudent(req, res) {
    try {
        const { id } = req.params;

        const data = await studentService.deleteStudent(id);

        return res.status(200).send({
            message: "Delete student successfully",
            data: data,
        });
    } catch(error) {
        return abort(error.status, error.message);
    }
}