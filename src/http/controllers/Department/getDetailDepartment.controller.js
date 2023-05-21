import Joi from 'joi';
import departmentService from '../../services/department.service.js';
import { abort } from '../../../helpers/error.js';

const validate = async ({ id }) => {
    try {
        const schema = Joi.object({
            id: Joi.number().integer().min(1).required()
        });

        return await schema.validateAsync({ id });
    } catch(error) {
        return abort(400, 'Validate error: ' + error.message);
    }
};

export async function getDetailDepartment(req, res) {
    try {
        const { id } = req.params;
        await validate({ id });

        const data = await departmentService.getDepartmentById(id);

        return res.status(200).send(data);
    } catch(error) {
        return abort(error.status, error.message);
    }
}