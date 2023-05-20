import scoreService from "../../services/score.service.js";
import { abort } from '../../../helpers/error.js';

export async function createScore(req, res) {
    try {
        const { idStudent, idSubject, diemCC, diemGK, diemThi, diemTB, idSemester } = req.body;

        const data = await scoreService.createScore({ idStudent, idSubject, diemCC, diemGK, diemThi, diemTB, idSemester });

        return res.status(200).send({
            message: 'Create Score successfully',
            data: data
        })
    } catch(error) {
        return abort(400, error.message);
    }
}