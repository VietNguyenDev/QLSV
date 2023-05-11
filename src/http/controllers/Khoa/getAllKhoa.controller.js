import khoaService from '../../services/khoa.service.js';

import { abort } from '../../../helpers/error.js';

export async function getAllKhoa(req, res) {
    try {
        const data = await khoaService.getAllKhoa();

        return res.status(200).send(data);
    } catch(error) {
        return abort(error.status, error.message);
    }
}