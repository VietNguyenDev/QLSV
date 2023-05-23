import Joi from 'joi';
import authService from '../../services/auth.service.js';
import { abort } from '../../../helpers/error.js';

const validate = async ({idUser, password}) => {
    try {
        const schema = Joi.object({
            idUser: Joi.number().required(),
            password: Joi.string().min(6).required(),
        });

        return await schema.validateAsync({idUser, password});
    } catch (error) {
        abort(400, error.message);
    }
}

export const loginController = async (req, res) => {
    const { idUser, password } = req.body;

    await validate({idUser, password});

    const result = await authService.login({idUser, password});

    return res.status(200).send(result);
}