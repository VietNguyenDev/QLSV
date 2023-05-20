import scoreService from "../../services/score.service.js";
import { abort } from '../../../helpers/error.js';

export async function getScoreById(req, res) {
    try {
        const { id } = req.params;

        const data = await scoreService.getScoreById(id);

        return res.status(200).send({
            data: data
        })
    } catch(error) {
        return abort(400, error.message);
    }
}