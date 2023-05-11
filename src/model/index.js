import dbConfig from "../config/db.config.js";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.models = {};
db.models.User = require('./user.model.js')(sequelize, Sequelize.DataTypes);
db.models.Product = require('./products.model.js')(sequelize, Sequelize.DataTypes);
db.models.Role = require('./roles.model.js')(sequelize, Sequelize.DataTypes);
db.models.Category = require('./categories.model.js')(sequelize, Sequelize.DataTypes);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

export default db;
