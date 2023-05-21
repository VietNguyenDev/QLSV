import Joi from "joi";
import classService from "../../services/class.service.js";
import { abort } from "../../../helpers/error.js";

const validate = async ({ id }) => {
    try {
        const schema = Joi.object({
            id: Joi.number().integer().min(1).required(),
        });

        return await schema.validateAsync({ id });
    } catch(error) {
        return abort(400, 'Validate error: ' + error.message);
    }
};

export async function deleteClass(req, res) {
    try {
        const { id } = req.params;
        await validate({ id });
            
        const classData = await classService.deleteClass(id);
        
        return res.status(200).send({
            message: 'Delete class successfully',
            classData
        });
    } catch(error) {
        return abort(error.status, error.message);
    }
}