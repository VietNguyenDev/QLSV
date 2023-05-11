import khoaService from '../../services/khoa.service.js';

import { abort } from '../../../helpers/error.js';

export async function createKhoa(req, res) {
    try {
        const { id, name } = req.body;

        const data = await khoaService.createKhoa({ id, name });

        return res.status(200).send(data);
    } catch(error) {
        return abort(error.status, error.message);
    }
}