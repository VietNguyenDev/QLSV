import Joi from "joi";
import classService from "../../services/class.service.js";
import { abort } from "../../../helpers/error.js";

const validate = async ({ id, name, idDepartment }) => {
    try {
        const schema = Joi.object({
            id: Joi.number(),
            name: Joi.string().required(),
            idDepartment: Joi.number().required()
        });

        return await schema.validateAsync({ id, name, idDepartment });
    } catch(error) {
        return abort(400, 'Validate error: ' + error.message);
    }
};


export async function createClass(req, res) {
    try {
        const { id, name, idDepartment } = req.body;
        
        await validate({ id, name, idDepartment });
        
        const classData = await classService.createClass({id, name, idDepartment});

        return res.status(200).send(classData);
    } catch(error) {
        return abort(error.status, error.message);
    }
}