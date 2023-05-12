import subjectService from "../../services/subject.service.js";
import { abort } from "../../../helpers/error.js";

export async function deleteSubject(req, res) {
    try {
        const { id } = req.params;
        const data = await subjectService.deleteSubject(id);

        return res.status(200).send({
            message: "Subject deleted",
            data: data
        });
    } catch(error) {
        return abort(error.status, error.message);
    }
}

 