import departmentService from '../../services/department.service.js';
import { abort } from '../../../helpers/error.js';

export async function getAllDepartment(req, res) {
    try {
        const data = await departmentService.getAllDepartment();

        return res.status(200).send(data);
    } catch(error) {
        return abort(error.status, error.message);
    }
}