import scoreService from "../../services/score.service.js";
import { abort } from '../../../helpers/error.js';

export async function getAllScore(req, res) {
    try {
        const data = await scoreService.getAllScore();

        return res.status(200).send(data);
    } catch(error) {
        return abort(400, error.message);
    }
}