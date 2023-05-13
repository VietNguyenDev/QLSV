import { Model, DataTypes } from 'sequelize';
import sequelize from './db.js';

class Student extends Model {}
Student.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    idClass: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idKhoa: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Student',
    tableName: 'Student',
    timestamps: false,
});

export default Student;