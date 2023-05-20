import departmentService from '../../services/department.service.js';

import { abort } from '../../../helpers/error.js';

export async function getDetailDepartment(req, res) {
    try {
        const { id } = req.params;
        console.log(id);
        const data = await departmentService.getDepartmentById(id);

        return res.status(200).send(data);
    } catch(error) {
        return abort(error.status, error.message);
    }
}