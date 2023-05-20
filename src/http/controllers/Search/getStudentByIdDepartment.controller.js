import searchService from "../../services/search.service.js";
import { abort } from "../../../helpers/error.js";

export async function getAllStudentByIdDepartment(req, res) {
    try {
        const { idDepartment } = req.params;

        const data = await searchService.getStudentByIdDepartment({idDepartment});

        return res.status(200).send({
            message: `All student in khoa ${idDepartment}`,
            data: data
        })
    } catch (error) {
        return abort(400, error.message);
    }
}