import db from '../../model/index.js';

import { abort } from '../../helpers/error.js';

async function getAllKhoa() {
    try {
        const data = await db.models.Khoa.findAll();

        return data;
    } catch(error) {
        return abort(400, error.message);
    }
}

async function getKhoaById(id) {
    try {
        const data = await db.models.Khoa.findByPk(id);

        if (!data) {
            return abort(400, 'Khoa not found');
        }

        return data;
    } catch(error) {
        return abort(400, error.message);
    }
}

async function createKhoa({id, name}) {
    try {

        console.log(name);
        const khoa = await db.models.Khoa.findOne({where: {name}});

        if (khoa) {
            return abort(400, 'Khoa already exist');
        }

        const data = await db.models.Khoa.create({id, name});

        return data;
    } catch(error) {
        return abort(400, error.message);
    }
}

async function updateKhoa(id, {name}) {
    try {
        const khoa = await db.models.Khoa.findByPk(id);

        if (!khoa) {
            return abort(400, 'Khoa not found');
        }

        const data = await db.models.Khoa.update({name}, {where: {id}});

        return data;
    } catch(error) {
        return abort(400, error.message);
    }
}

async function deleteKhoa(id) {
    try {
        const khoa = await db.models.Khoa.findByPk(id);

        if (!khoa) {
            return abort(400, 'Khoa not found');
        }

        const data = await db.models.Khoa.destroy({where: {id}});
    } catch(error) {
        return abort(400, error.message);
    }
}

export default { getAllKhoa, getKhoaById, createKhoa, updateKhoa, deleteKhoa };