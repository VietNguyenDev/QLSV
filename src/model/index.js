import { Sequelize } from "sequelize";
import sequelize from "./db.js";
import departmentModel from "./department.model.js";
import lopModel from "./class.model.js";
import subjectModel from "./subject.model.js";
import userModel from "./user.model.js";
import scoreModel from "./score.model.js";
import semesterModel from "./semester.model.js";



const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.models = {};
db.models.Department = departmentModel;
db.models.Lop = lopModel;
db.models.Subject = subjectModel;
db.models.User = userModel;
db.models.Score = scoreModel;
db.models.Semester = semesterModel;
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

export default db;
