import userService from "../../services/user.service.js";
import { abort } from "../../../helpers/error.js";

export async function getStudentById(req, res) {
    try {
        const { id } = req.params;

        const data = await userService.getStudentById(id);

        return res.status(200).send(data);
    } catch (error) {
        return abort(error.status, error.message);
    }
}