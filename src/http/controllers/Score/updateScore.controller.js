import scoreService from "../../services/score.service.js";
import { abort } from '../../../helpers/error.js';

export async function updateScore(req, res) {
    try {

        const { idStudent } = req.params;
        

        const { idSubject, diemCC, diemGK, diemThi, idSemester } = req.body;

        const data = await scoreService.updateScore(idStudent, { idSubject, diemCC, diemGK, diemThi, idSemester });

        return res.status(200).send({
            message: 'Update Score successfully',
            data: data
        })
    } catch(error) {
        return abort(400, error.message);
    }
}