import classService from "../../services/class.service.js";

import { abort } from "../../../helpers/error.js";

export async function deleteClass(req, res) {
    try {
        const { id } = req.params;
    
        const classData = await classService.deleteClass(id);
        
        return res.status(200).send({
            message: 'Delete class successfully',
            classData
        });
    } catch(error) {
        return abort(error.status, error.message);
    }
}