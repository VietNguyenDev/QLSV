import userService from "../../services/user.service.js";
import { abort } from "../../../helpers/error.js";

export async function createStudent(req, res) {
    try {
        const { id, fullName, dateOfBirth, idClass, idDepartment, password } = req.body;

        const data = await userService.createStudent({
            id,
            fullName,
            dateOfBirth,
            idClass,
            idDepartment,
            password
        });

        return res.status(200).send({
            message: "Create student successfully",
            data: data,
        });
    } catch(error) {
        return abort(error.status, error.message);
    }
}