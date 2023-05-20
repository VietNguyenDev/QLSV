import db from '../../model/index.js';

import { abort } from '../../helpers/error.js';

async function getAllClass() {
    try {
        const data = await db.models.Lop.findAll();

        return data;
    } catch(error) {
        return abort(400, error.message);
    }
}


async function createClass({id, name, idDepartment}) {
    try {
        const khoa = await db.models.Department.findByPk(idDepartment);
        
        if (!khoa) {
            return abort(400, 'Khoa not found');
        }

        const classData = await db.models.Lop.findOne({where: {name}});

        if (classData) {
            return abort(400, 'Class already exist');
        }

        const data = await db.models.Lop.create({id, name, idDepartment});

        return data;
    } catch(error) {
        return abort(400, error.message);
    }
}

async function updateClass(id, name, idKhoa) {
    try {
        const lop = await db.models.Lop.findByPk(id);

        if (!lop) {
            return abort(400, 'Class not found');
        }

        const classData = await db.models.Lop.update({name, idKhoa}, {where: {id}});

        return classData;
    } catch(error) {
        return abort(400, error.message);
    }
}

async function deleteClass(id) {
    try {
        const lop = await db.models.Lop.findByPk(id);

        if (!lop) {
            return abort(400, 'Class not found');
        }

        const classData = await db.models.Lop.destroy({where: {id}});

        return classData;
    } catch(error) {
        return abort(400, error.message);
    }
}

export default { getAllClass, createClass, updateClass, deleteClass };