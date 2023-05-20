import { Model, DataTypes } from 'sequelize';
import sequelize from './db.js';

class Subject extends Model{}
Subject.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    timeOfLesson: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idTeacher: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idSemester: {
        type: DataTypes.INTEGER,
    }
} , {
    sequelize,
    modelName: 'Subject',
    tableName: 'subject',
    timestamps: false
});

export default Subject;