import subjectService from "../../services/subject.service.js";
import { abort } from "../../../helpers/error.js";

export async function updateSubject(req, res) {
    try {
        const { id } = req.params;
        const { name, timeOfLesson, idTeacher } = req.body;

        const data = await subjectService.updateSubject(id, { name, timeOfLesson, idTeacher });

        return res.status(200).send({
            message: "Subject updated",
            data: data
        });
    } catch(error) {
        return abort(error.status, error.message);
    }
}
