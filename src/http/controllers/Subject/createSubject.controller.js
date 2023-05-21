import Joi from "joi";
import subjectService from "../../services/subject.service.js";
import { abort } from "../../../helpers/error.js";

const validate = async ({ id, name, timeOfLesson, idTeacher }) => {
    try {
        const schema = Joi.object({
            id: Joi.number().integer().min(1).required(),
            name: Joi.string().required(),
            timeOfLesson: Joi.number().integer().min(1).required(),
            idTeacher: Joi.number().integer().min(1).required(),
        });

        return await schema.validateAsync({ id, name, timeOfLesson, idTeacher });
    } catch(error) {
        return abort(400, 'Validate error: ' + error.message);
    }
};

export async function createSubject(req, res) {
    try {
        const { id, name, timeOfLesson, idTeacher } = req.body;
        await validate({ id, name, timeOfLesson, idTeacher });
        
        const data = await subjectService.createSubject({ id, name, timeOfLesson, idTeacher });

        return res.status(200).send({
            message: "Create subject successfully",
            data: data
        });
    } catch(error){
        return abort(error.status, error.message);
    }
}
