import Joi from "joi";
import userService from "../../services/user.service.js";
import { abort } from "../../../helpers/error.js";

const validate = async ({ id, fullName, dateOfBirth, idClass, idDepartment, password }) => {
    try {
        const schema = Joi.object({
            id: Joi.number().integer().min(1).required(),
            fullName: Joi.string().required(),
            dateOfBirth: Joi.date().required(),
            idClass: Joi.number().integer().min(1).required(),
            idDepartment: Joi.number().integer().min(1).required(),
            password: Joi.string().min(6).required()
        });

        return await schema.validateAsync({ id, fullName, dateOfBirth, idClass, idDepartment, password });
    } catch(error) {
        return abort(400, 'Validate error: ' + error.message);
    }
};


export async function createStudent(req, res) {
    try {
        const { id, fullName, dateOfBirth, idClass, idDepartment, password } = req.body;
        await validate({ id, fullName, dateOfBirth, idClass, idDepartment, password });
        
        const data = await userService.createStudent({
            id,
            fullName,
            dateOfBirth,
            idClass,
            idDepartment,
            password
        });

        return res.status(200).send({
            message: "Create student successfully",
            data: data,
        });
    } catch(error) {
        return abort(error.status, error.message);
    }
}