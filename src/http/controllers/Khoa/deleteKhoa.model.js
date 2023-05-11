import khoaService from '../../services/khoa.service.js';

import { abort } from '../../../helpers/error.js';

export async function deleteKhoa(req, res) {
    try {
        const { id } = req.params;

        const data = await khoaService.deleteKhoa(id);

        return res.status(200).send({
            message: 'Delete success',
            data
        });
    } catch(error) {
        return abort(error.status, error.message);
    }
}