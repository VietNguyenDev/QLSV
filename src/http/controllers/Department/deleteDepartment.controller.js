import departmentService from '../../services/department.service.js';

import { abort } from '../../../helpers/error.js';

export async function deleteDepartment(req, res) {
    try {
        const { id } = req.params;

        const data = await departmentService.deleteDepartment(id);

        return res.status(200).send({
            message: 'Delete success',
            data
        });
    } catch(error) {
        return abort(error.status, error.message);
    }
}