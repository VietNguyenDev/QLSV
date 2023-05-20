import db from "../../model/index.js";
import { abort } from "../../helpers/error.js";

async function getAllStudent() {
    try {
        const data = await db.models.User.findAll({where: {role: 1}});

        return data;
    } catch (error) {
        return abort(400, error.message);
    }
}

async function getStudentById(id) {
    try {
        const data = await db.models.User.findByPk(id);

        if(!data) {
            return abort(400, "Student not found");
        }

        return data;
    } catch (error) {
        return abort(400, error.message);
    }
}

async function getStudentByName(fullName) {
    try {
        const data = await db.models.User.findOne({ where: { role: 1, fullName: fullName } });

        if (!data) {
            return abort(400, "Student not found");
        }

        return data;
    } catch (error) {
        return abort(400, error.message);
    }
}

async function createStudent({ id, fullName, dateOfBirth, idClass, idDepartment, password }) {
    try {
        const student = await db.models.User.findByPk(id);

        if (student) {
            return abort(400, "Student already exist");
        }

        const lop = await db.models.Lop.findByPk(idClass);

        if (!lop) {
            return abort(400, "Class not found");
        }

        const khoa = await db.models.Department.findByPk(idDepartment);

        if (!khoa) {
            return abort(400, "Department not found");
        }

        const data = await db.models.User.create({
            id,
            fullName,
            dateOfBirth,
            idClass,
            idDepartment,
            password
        });

        return data;
    } catch(error) {
        return abort(400, error.message);
    } 
}

async function updateStudent(id, {fullName, dateOfBirth, idClass, idDepartment}) {
    try {
        const user = await db.models.User.findByPk(id);

        if (!user) {
            if(user.role != 1) {
                return abort(400, "User is not student");
            }
            return abort(400, "Student not found");
        }

        const lop = await db.models.Lop.findByPk(idClass);

        if (!lop) {
            return abort(400, "Class not found");
        }

        const khoa = await db.models.Department.findByPk(idDepartment);

        if (!khoa) {

            return abort(400, "Department not found");
        }

        const data = await db.models.User.update({
            fullName, dateOfBirth, idClass, idDepartment 
        },
           { 
                where: { id } 
        });

        return data;
    } catch(error) {
        return abort(400, error.message);
    }
}

async function deleteStudent(id) {
    try {
        const student = await db.models.User.findByPk(id);

        if (!student) {
            return abort(400, "Student not found");
        }

        const data = await db.models.User.destroy({ where: { id } });

        return data;
    } catch(error) {
        return abort(400, error.message);
    }
}

export default { getAllStudent, getStudentById, getStudentByName, createStudent, updateStudent, deleteStudent };