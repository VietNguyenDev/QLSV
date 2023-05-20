import userService from "../../services/user.service.js";
import { abort } from "../../../helpers/error.js";

export async function getStudentByName(req, res) {
    try {
        const { fullName } = req.params;

        const data = await userService.getStudentByName(fullName);

        return res.status(200).send(data);
    } catch(error) {
        return abort(error.status, error.message);
    }
}