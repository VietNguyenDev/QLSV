import express from 'express';
import { getAllClass } from '../http/controllers/Class/getAllClass.controller.js';
import { createClass } from '../http/controllers/Class/createClass.controller.js';
import { updateClass } from '../http/controllers/Class/updateClass.controller.js';
import { deleteClass } from '../http/controllers/Class/deleteClass.controller.js';

const router = express.Router();

router.get('/getClass', getAllClass);
router.post('/createClass', createClass);
router.put('/updateClass/:id', updateClass);
router.post('/deleteClass/:id', deleteClass);

export default router;