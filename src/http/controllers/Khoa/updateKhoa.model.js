import khoaService from '../../services/khoa.service.js';

import { abort } from '../../../helpers/error.js';

export async function updateKhoa(req, res) {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const data = await khoaService.updateKhoa(id, { name });

        return res.status(200).send({
            message: 'Update success',
            data
        });
    } catch(error) {
        return abort(error.status, error.message);
    }
}