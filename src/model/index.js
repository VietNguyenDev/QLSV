import { Sequelize } from "sequelize";
import sequelize from "./db.js";
import khoaModel from "./khoa.model.js";
import lopModel from "./class.model.js";
import subjectModel from "./subject.model.js";




const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.models = {};
db.models.Khoa = khoaModel;
db.models.Lop = lopModel;
db.models.Subject = subjectModel;
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

export default db;
