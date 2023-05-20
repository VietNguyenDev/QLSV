import classService from "../../services/class.service.js";

import { abort } from "../../../helpers/error.js";

export async function createClass(req, res) {
    try {
        const { id, name, idDepartment } = req.body;
        
        const classData = await classService.createClass({id, name, idDepartment});

        return res.status(200).send(classData);
    } catch(error) {
        return abort(error.status, error.message);
    }
}