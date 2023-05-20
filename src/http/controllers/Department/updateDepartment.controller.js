import departmentService from '../../services/department.service.js';

import { abort } from '../../../helpers/error.js';

export async function updateDepartment(req, res) {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const data = await departmentService.updateDepartment(id, { name });

        return res.status(200).send({
            message: 'Update success',
            data
        });
    } catch(error) {
        return abort(error.status, error.message);
    }
}