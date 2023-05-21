import classService from "../../services/class.service.js";
import { abort } from "../../../helpers/error.js";

export async function getAllClass(req, res) {
    try {
        const classData = await classService.getAllClass();

        return res.status(200).send(classData);
    } catch(error) {
        return abort(error.status, error.message);
    }
}