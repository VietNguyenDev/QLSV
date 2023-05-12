import khoaService from '../../services/khoa.service.js';

import { abort } from '../../../helpers/error.js';

export async function getDetailKhoa(req, res) {
    try {
        const { id } = req.params;
        console.log(id);
        const data = await khoaService.getKhoaById(id);

        return res.status(200).send(data);
    } catch(error) {
        return abort(error.status, error.message);
    }
}