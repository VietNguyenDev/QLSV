import userService from "../../services/user.service.js";
import { abort } from "../../../helpers/error.js";

export async function getAllStudent(req, res) {
    try {
        const data = await userService.getAllStudent();

        return res.status(200).send(data);
    } catch (error) {
        return abort(error.status, error.message);
    }
}