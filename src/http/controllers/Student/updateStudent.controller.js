import Joi from "joi";
import userService from "../../services/user.service.js";
import { abort } from "../../../helpers/error.js";

const validate = async ({ id }) => {
    try {
        const schema = Joi.object({
            id: Joi.number().integer().min(1).required(),
            fullName: Joi.string().required(),
            dateOfBirth: Joi.date().required(),
            idClass: Joi.number().integer().min(1).required(),
            idDepartment: Joi.number().integer().min(1).required(),
        });

        return await schema.validateAsync({ id });
    } catch(error) {
        return abort(400, 'Validate error: ' + error.message);
    }
};

export async function updateStudent(req, res) {
    try {
        const { id } = req.params;

        const { fullName, dateOfBirth, idClass, idDepartment } = req.body;
        await validate({ id, fullName, dateOfBirth, idClass, idDepartment });
        
        const data = await userService.updateStudent(id, { fullName, dateOfBirth, idClass, idDepartment });

        return res.status(200).send({
            message: "Update student successfully",
            data: data,
        });
    } catch(error) {
        return abort(error.status, error.message);
    }
}