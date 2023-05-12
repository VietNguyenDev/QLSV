import subjectService from "../../services/subject.service.js";
import { abort } from "../../../helpers/error.js";

export async function getSubjectById(req, res) {
    try {
        const { id } = req.params;
        const data = await subjectService.getSubjectById(id);

        return res.status(200).send(data);
    } catch(error) {
        return abort(error.status, error.message);
    }
}

