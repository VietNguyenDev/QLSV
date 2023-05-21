import Joi from "joi";
import classService from "../../services/class.service.js";
import { abort } from "../../../helpers/error.js";

async function validate({ id, name, idKhoa }) {
    try {
        const schema = Joi.object({
            id: Joi.number().integer().min(1).required(),
            name: Joi.string().required(),
            idKhoa: Joi.number().integer().min(1).required()
        });
        
        return await schema.validateAsync({ id, name, idKhoa });
    } catch(error) {
        return abort(400, 'Validate error: ' + error.message);
    }
};

export async function updateClass(req, res) {
    try {
        const { id } = req.params;
        const { name, idKhoa } = req.body;
        await validate({ id, name, idKhoa });

        const classData = await classService.updateClass(id, name, idKhoa);

        return res.status(200).send({
            message: 'Update class successfully',
            classData
        });
    } catch(error) {
        return abort(error.status, error.message);
    }
}