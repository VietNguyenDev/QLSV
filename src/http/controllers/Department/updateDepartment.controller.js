import Joi from 'joi';
import departmentService from '../../services/department.service.js';
import { abort } from '../../../helpers/error.js';

const validate = async ({ id, name }) => {
    try {
        const schema = Joi.object({
            id: Joi.number().integer().min(1).required(),
            name: Joi.string().required()
        });

        return await schema.validateAsync({ name });
    } catch(error) {
        return abort(400, 'Validate error: ' + error.message);
    }
};

export async function updateDepartment(req, res) {
    try {
        const { id } = req.params;
        const { name } = req.body;
        await validate({ id, name });

        const data = await departmentService.updateDepartment(id, { name });

        return res.status(200).send({
            message: 'Update success',
            data
        });
    } catch(error) {
        return abort(error.status, error.message);
    }
}