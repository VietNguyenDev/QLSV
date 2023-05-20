import db from '../../model/index.js';

import { abort } from '../../helpers/error.js';

async function getAllDepartment() {
    try {
        const data = await db.models.Department.findAll();

        return data;
    } catch(error) {
        return abort(400, error.message);
    }
}

async function getDepartmentById(id) {
    try {
        const data = await db.models.Department.findByPk(id);

        if (!data) {
            return abort(400, 'Department not found');
        }

        return data;
    } catch(error) {
        return abort(400, error.message);
    }
}

async function createDepartment({id, name}) {
    try {

        console.log(name);
        const khoa = await db.models.Department.findOne({where: {name}});

        if (khoa) {
            return abort(400, 'Department already exist');
        }

        const data = await db.models.Department.create({id, name});

        return data;
    } catch(error) {
        return abort(400, error.message);
    }
}

async function updateDepartment(id, {name}) {
    try {
        const khoa = await db.models.Department.findByPk(id);

        if (!khoa) {
            return abort(400, 'Department not found');
        }

        const data = await db.models.Department.update({name}, {where: {id}});

        return data;
    } catch(error) {
        return abort(400, error.message);
    }
}

async function deleteDepartment(id) {
    try {
        const khoa = await db.models.Department.findByPk(id);

        if (!khoa) {
            return abort(400, 'Department not found');
        }

        const data = await db.models.Department.destroy({where: {id}});
    } catch(error) {
        return abort(400, error.message);
    }
}

export default { getAllDepartment, getDepartmentById, createDepartment, updateDepartment, deleteDepartment };