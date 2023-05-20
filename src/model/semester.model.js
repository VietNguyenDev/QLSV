import { Model, DataTypes } from 'sequelize';
import sequelize from './db.js';

class Semester extends Model {}
Semester.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Semester',
    tableName: 'Semester',
    timestamps: false,
});

export default Semester;