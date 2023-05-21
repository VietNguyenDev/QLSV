import Joi from "joi";
import searchService from "../../services/search.service.js";
import { abort } from "../../../helpers/error.js";

const validate = async ({ idClass }) => {
    try {
        const schema = Joi.object({
            idClass: Joi.number().integer().min(1).required()
        });

        return await schema.validateAsync({ idClass });
    } catch(error) {
        return abort(400, 'Validate error: ' + error.message);
    }
};

export async function getAllStudentByIdClass(req, res) {
    try {
        const { idClass } = req.params;
        await validate({ idClass });

        const data = await searchService.getAllStudentByIdClass({idClass});

        return res.status(200).send({
            message: `All student in class ${idClass}`,
            data: data
        })
    } catch(error) {
        return abort(400, error.message);
    }
}