import bcrypt from 'bcrypt';

import db from '../../model/index.js';
import { abort } from '../../helpers/error.js';
import { generateToken } from '../../helpers/jwt.js';

async function login({ idUser, password }) {
    try {
        const user = await db.models.User.findOne({ where: { id: idUser } });

        if (!user | !(/*await bcrypt.compare(password, user.password)*/ password === user.password)) {
            abort(400, 'Wrong id or password');
        }

        const accessToken = generateToken({ userId: user.id });

        return { accessToken };
    } catch (error) {
        abort(400, error.message);
    }
}

export default { login };