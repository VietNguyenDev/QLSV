import userModel from "../../model/user.model";
import { abort } from "../../helpers/error";

export async function updateUser({id, fullName, dateOfBirth, gender}) {
    const user = await userModel.findByPk(id);

    if (!user) {
        return abort(400, 'User not found');
    }

    const data = await user.update({
        fullName,
        dateOfBirth,
        gender
    });

    return data;
}