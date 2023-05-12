import classService from "../../services/class.service.js";

import { abort } from "../../../helpers/error.js";

export async function updateClass(req, res) {
    try {
        const { id } = req.params;
        const { name, idKhoa } = req.body;

        const classData = await classService.updateClass(id, name, idKhoa);

        return res.status(200).send({
            message: 'Update class successfully',
            classData
        });
    } catch(error) {
        return abort(error.status, error.message);
    }
}