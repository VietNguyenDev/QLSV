import khoaModel from '../../model/khoa.model.js';

import { abort } from '../../helpers/error.js';

async function getAllKhoa() {
    try {
        const data = await khoaModel.findAll();

        return data;
    } catch(error) {
        return abort(400, error.message);
    }
}

async function getKhoaById(id) {
    try {
        const data = await khoaModel.findByPk(id);

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
        const khoa = await khoaModel.find({name});

        if (khoa) {
            return abort(400, 'Khoa already exist');
        }

        const data = await khoaModel.create({id, name});

        return data;
    } catch(error) {
        return abort(400, error.message);
    }
}

async function updateKhoa(id, {name}) {
    try {
        const khoa = await khoaModel.findByPk(id);

        if (!khoa) {
            return abort(400, 'Khoa not found');
        }

        const data = await khoaModel.update({name}, {where: {id}});

        return data;
    } catch(error) {
        return abort(400, error.message);
    }
}

async function deleteKhoa(id) {
    try {
        const khoa = await khoaModel.findByPk(id);

        if (!khoa) {
            return abort(400, 'Khoa not found');
        }

        const data = await khoaModel.destroy({where: {id}});
    } catch(error) {
        return abort(400, error.message);
    }
}

export default { getAllKhoa, getKhoaById, createKhoa, updateKhoa, deleteKhoa };