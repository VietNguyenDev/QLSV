import subjectService from "../../services/subject.service.js";

import { abort } from "../../../helpers/error.js";

export async function createSubject(req, res) {
    try {
        const { id, name, timeOfLesson, idTeacher } = req.body;

        const data = await subjectService.createSubject({ id, name, timeOfLesson, idTeacher });

        return res.status(200).send({
            message: "Create subject successfully",
            data: data
        });
    } catch(error){
        return abort(error.status, error.message);
    }
}
