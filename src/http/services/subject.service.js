import db from '../../model/index.js';
import { abort } from '../../helpers/error.js';

async function getAllSubject() {
    try {
        const data = await db.models.Subject.findAll();

        return data;
    } catch(error) {
        return abort(400, error.message);
    }
}

async function getSubjectById(id) {
    try {
        const data = await db.models.Subject.findByPk(id);

        if (!data) {
            return abort(400, 'Subject not found');
        }

        return data;
    } catch(error) {
        return abort(400, error.message);
    }
}

async function createSubject({id, name, timeOfLesson, idTeacher}) {
    try {
        const subject = await db.models.Subject.findOne({where: {name}});

        if (subject) {
            return abort(400, 'Subject already exist');
        }

        const data = await db.models.Subject.create({id, name, timeOfLesson, idTeacher});

        return data;
    } catch(error) {
        return abort(400, error.message);
    }
}

async function updateSubject(id, {name, timeOfLesson, idTeacher}) {
    try {
        const subject = await db.models.Subject.findByPk(id);

        if (!subject) {
            return abort(400, 'Subject not found');
        }   

        const data = await db.models.Subject.update({name, timeOfLesson, idTeacher}, {where: {id}});

        return data;
    } catch(error){
        return abort(400, error.message);
    }
}

async function deleteSubject(id) {
    try {
        const subject = await db.models.Subject.findByPk(id);

        if (!subject) {
            return abort(400, 'Subject not found');
        }

        const data = await db.models.Subject.destroy({where: {id}});

        return data;
    } catch(error) {
        return abort(400, error.message);
    }
}

export default { getAllSubject, getSubjectById, createSubject, updateSubject, deleteSubject };