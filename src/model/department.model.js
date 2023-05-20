import { Model, DataTypes } from 'sequelize';
import sequelize from './db.js';

class Department extends Model{}

Department.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Department',
    tableName: 'department',
    timestamps: false
});

export default Department;