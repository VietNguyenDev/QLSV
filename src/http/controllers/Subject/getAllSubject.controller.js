import subjectService from "../../services/subject.service.js";
import { abort } from "../../../helpers/error.js";

export async function getAllSubject(req, res) {
    try {
        const data = await subjectService.getAllSubject();

        return res.status(200).send(data);
    } catch(error) {
        return abort(error.status, error.message);
    }
}

