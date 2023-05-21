import Joi from "joi";
import searchService from "../../services/search.service.js";
import { abort } from "../../../helpers/error.js";

const validate = async ({ idDepartment }) => {
    try {
        const schema = Joi.object({
            idDepartment: Joi.number().integer().min(1).required()
        });

        return await schema.validateAsync({ idDepartment });
    } catch(error) {
        return abort(400, 'Validate error: ' + error.message);
    }
};

export async function getAllStudentByIdDepartment(req, res) {
    try {
        const { idDepartment } = req.params;
        await validate({ idDepartment });

        const data = await searchService.getStudentByIdDepartment({idDepartment});

        return res.status(200).send({
            message: `All student in khoa ${idDepartment}`,
            data: data
        })
    } catch (error) {
        return abort(400, error.message);
    }
}