import Joi from "joi";
import userService from "../../services/user.service.js";
import { abort } from "../../../helpers/error.js";

const validate = async ({ fullName }) => {
    try {
        const schema = Joi.object({
            fullName: Joi.string().required(),
        });

        return await schema.validateAsync({ fullName });
    } catch(error) {
        return abort(400, 'Validate error: ' + error.message);
    }
};

export async function getStudentByName(req, res) {
    try {
        const { fullName } = req.params;
        await validate({ fullName });
        
        const data = await userService.getStudentByName(fullName);

        return res.status(200).send(data);
    } catch(error) {
        return abort(error.status, error.message);
    }
}