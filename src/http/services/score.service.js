import db from '../../model/index.js';
import { abort } from '../../helpers/error.js';

async function getAllScore() {
    try {
        const data = await db.models.Score.findAll();

        return data;
    } catch(error) {
        return abort(400, error.message);
    }
}

async function getScoreById(idStudent) {
    try {
        const data = await db.models.Score.findByPk(idStudent);

        return data;

    } catch(error) {
        return abort(400, error.message);
    }
}

async function createScore({idStudent, idSubject, diemCC, diemGK, diemThi, diemTB, idSemester}) {
    try {
        const sinhVien = await db.models.User.findByPk(idStudent);

        if (!sinhVien) {
            return abort(400, 'SinhVien not found');
        }

        const monHoc = await db.models.Subject.findByPk(idSubject);

        if (!monHoc) {
            return abort(400, 'MonHoc not found');
        }

        const hocKy = await db.models.Semester.findByPk(idSemester);

        if (!hocKy) {

            return abort(400, 'HocKy not found');
        }

        const data = await db.models.Score.create({idStudent, idSubject, diemCC, diemGK, diemThi, diemTB, idSemester});

        return data;
    } catch(error) {
        return abort(400, error.message);
    }
}

async function updateScore(idStudent, { idSubject, diemCC, diemGK, diemThi, diemTB, idSemester }) {
    try {
        
        const sinhVien = await db.models.User.findByPk(idStudent);

        if (!sinhVien) {

            return abort(400, 'SinhVien not found');
        }

        const monHoc = await db.models.Subject.findByPk(idSubject);

        if (!monHoc) {
                
            return abort(400, 'MonHoc not found');
        }

        const hocKy = await db.models.Semester.findByPk(idSemester);

        if (!hocKy) {       
            return abort(400, 'HocKy not found');
        }

        const scoreData = await db.models.Score.update({idSubject, diemCC, diemGK, diemThi, diemTB, idSemester}, {where: {idStudent}});

        return scoreData;
    } catch(error) {
        return abort(400, error.message);
    }
}

export default { getAllScore, getScoreById, createScore, updateScore };