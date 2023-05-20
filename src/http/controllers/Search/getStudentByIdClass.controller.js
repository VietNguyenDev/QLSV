import searchService from "../../services/search.service.js";
import { abort } from "../../../helpers/error.js";

export async function getAllStudentByIdClass(req, res) {
    try {
        const { idClass } = req.params;

        const data = await searchService.getAllStudentByIdClass({idClass});

        return res.status(200).send({
            message: `All student in class ${idClass}`,
            data: data
        })
    } catch(error) {
        return abort(400, error.message);
    }
}