import departmentService from '../../services/department.service.js';

import { abort } from '../../../helpers/error.js';

export async function createDepartment(req, res) {
    try {
        const { id, name } = req.body;
        
        const data = await departmentService.createDepartment({ id, name });

        return res.status(200).send(data);
    } catch(error) {
        return abort(error.status, error.message);
    }
}