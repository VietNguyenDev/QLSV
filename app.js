import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

import khoaRoutes from './src/routes/khoa.routes.js';
import classRoutes from './src/routes/class.routes.js';

dotenv.config({ path: '.env' });

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/khoa', khoaRoutes);
app.use('/class', classRoutes);
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});