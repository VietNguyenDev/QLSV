import Joi from "joi";
import scoreService from "../../services/score.service.js";
import { abort } from '../../../helpers/error.js';

const validate = async ({ idStudent, idSubject, diemCC, diemGK, diemThi, diemTB, idSemester }) => {
    try {
        const schema = Joi.object({
            idStudent: Joi.number().integer().min(1).required(),
            idSubject: Joi.number().integer().min(1).required(),
            diemCC: Joi.number().integer().min(0).max(10).required(),
            diemGK: Joi.number().integer().min(0).max(10).required(),
            diemThi: Joi.number().integer().min(0).max(10).required(),
            diemTB: Joi.number().integer().min(0).max(10).required(),
            idSemester: Joi.number().integer().min(1).required()
        });
         
        return await schema.validateAsync({ idStudent, idSubject, diemCC, diemGK, diemThi, diemTB, idSemester });

    } catch(error) {
        return abort(400, 'Validate error: ' + error.message);
    }
};

export async function createScore(req, res) {
    try {
        const { idStudent, idSubject, diemCC, diemGK, diemThi, diemTB, idSemester } = req.body;

        await validate({ idStudent, idSubject, diemCC, diemGK, diemThi, diemTB, idSemester });

        const data = await scoreService.createScore({ idStudent, idSubject, diemCC, diemGK, diemThi, diemTB, idSemester });

        return res.status(200).send({
            message: 'Create Score successfully',
            data: data
        })
    } catch(error) {
        return abort(400, error.message);
    }
}