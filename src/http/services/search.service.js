import db from "../../model/index.js";
import { abort } from "../../helpers/error.js";

async function getAllStudentByIdClass({idClass}) {
    try {
        const studentClass = await db.models.User.findOne({where: {idClass: idClass, role: 1}});

        if (!studentClass) {
            return abort(400, 'Student not found');
        }

        return studentClass;
    } catch(error) {
        return abort(400, error.message);
    }
}

async function getStudentByIdDepartment({idDepartment}) {
    try {
        const studentDepartment = await db.models.User.findOne({where: {idDepartment: idDepartment, role: 1}});

        if (!studentDepartment) {
            return abort(400, 'Student not found');
        }

        return studentDepartment;
    } catch (error) {
        return abort(400, error.message);
    }
}

export default { getAllStudentByIdClass, getStudentByIdDepartment };