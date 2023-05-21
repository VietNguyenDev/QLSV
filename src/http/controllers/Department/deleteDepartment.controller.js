import Joi from 'joi';
import departmentService from '../../services/department.service.js';
import { abort } from '../../../helpers/error.js';

const validate = async ({ id, name }) => {
    try { 
        const schema = Joi.object({
            id: Joi.number().integer().min(1).required(),
            name: Joi.string().required()
        });

        return await schema.validateAsync({ id, name });
    } catch(error) {
        return abort(400, 'Validate error: ' + error.message);
    }
};

export async function deleteDepartment(req, res) {
    try {
        const { id } = req.params;
        await validate({ id });

        const data = await departmentService.deleteDepartment(id);

        return res.status(200).send({
            message: 'Delete success',
            data
        });
    } catch(error) {
        return abort(error.status, error.message);
    }
}