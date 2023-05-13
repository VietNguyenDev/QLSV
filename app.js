import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

import khoaRoutes from './src/routes/khoa.routes.js';
import classRoutes from './src/routes/class.routes.js';
import subjectRoutes from './src/routes/subject.routes.js';
import studentRoutes from './src/routes/student.routes.js';

dotenv.config({ path: '.env' });

const app = express();
const port = 8080;

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//all routes
app.use('/khoa', khoaRoutes);
app.use('/class', classRoutes);
app.use('/subject', subjectRoutes);
app.use('/student', studentRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});