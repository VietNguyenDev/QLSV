import express from 'express';

import { getAllScore } from '../http/controllers/Score/getAllScore.controller.js';
import { getScoreById } from '../http/controllers/Score/getScoreById.controller.js';
import { createScore } from '../http/controllers/Score/createScore.controller.js';
import { updateScore } from '../http/controllers/Score/updateScore.controller.js';

const router = express.Router();

router.get('/getAllScore', getAllScore);
router.get('/getScoreById/:idStudent', getScoreById);
router.post('/createScore', createScore);
router.put('/updateScore/:idStudent', updateScore);

export default router;