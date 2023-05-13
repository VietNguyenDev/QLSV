import db from "../../model/index.js";
import { abort } from "../../helpers/error.js";

async function getAllStudent() {
    try {
        const data = await db.models.Student.findAll();

        return data;
    } catch (error) {
        return abort(400, error.message);
    }
}

async function getStudentById(id) {
    try {
        const data = await db.models.Student.findByPk(id);

        return data;
    } catch (error) {
        return abort(400, error.message);
    }
}

async function getStudentByName(fullName) {
    try {
        const data = await db.models.Student.findOne({ where: { fullName } });

        return data;
    } catch (error) {
        return abort(400, error.message);
    }
}

async function createStudent({ id, fullName, dateOfBirth, idClass, idKhoa }) {
    try {
        const student = await db.models.Student.findByPk(id);

        if (student) {
            return abort(400, "Student already exist");
        }

        const lop = await db.models.Lop.findByPk(idClass);

        if (!lop) {
            return abort(400, "Class not found");
        }

        const khoa = await db.models.Khoa.findByPk(idKhoa);

        if (!khoa) {
            return abort(400, "Khoa not found");
        }

        const data = await db.models.Student.create({
            id,
            fullName,
            dateOfBirth,
            idClass,
            idKhoa,
        });

        return data;
    } catch(error) {
        return abort(400, error.message);
    } 
}

async function updateStudent(id, {fullName, dateOfBirth, idClass, idKhoa}) {
    try {
        const student = await db.models.Student.findByPk(id);

        if (!student) {
            return abort(400, "Student not found");
        }

        const lop = await db.models.Lop.findByPk(idClass);

        if (!lop) {
            return abort(400, "Class not found");
        }

        const khoa = await db.models.Khoa.findByPk(idKhoa);

        if (!khoa) {

            return abort(400, "Khoa not found");
        }

        const data = await db.models.Student.update({
            fullName, dateOfBirth, idClass, idKhoa 
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
        const student = await db.models.Student.findByPk(id);

        if (!student) {
            return abort(400, "Student not found");
        }

        const data = await db.models.Student.destroy({ where: { id } });

        return data;
    } catch(error) {
        return abort(400, error.message);
    }
}

export default { getAllStudent, getStudentById, getStudentByName, createStudent, updateStudent, deleteStudent };