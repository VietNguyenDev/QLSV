import userService from "../../services/user.service.js";
import { abort } from "../../../helpers/error.js";

export async function updateStudent(req, res) {
    try {
        const { id } = req.params;

        const { fullName, dateOfBirth, idClass, idDepartment } = req.body;

        const data = await userService.updateStudent(id, { fullName, dateOfBirth, idClass, idDepartment });

        return res.status(200).send({
            message: "Update student successfully",
            data: data,
        });
    } catch(error) {
        return abort(error.status, error.message);
    }
}