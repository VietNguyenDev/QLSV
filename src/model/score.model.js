import { Model, DataTypes } from 'sequelize';
import sequelize from './db.js';

class Score extends Model {}
Score.init({
    idStudent: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    idSubject: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    diemCC: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    diemGK: {
        type: DataTypes.INTEGER,
    },
    diemThi: {
        type: DataTypes.INTEGER,
    },
    diemTB: {
        type: DataTypes.INTEGER,
    },
    idSemester: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {    
    sequelize,
    modelName: 'Score',
    tableName: 'score',
    timestamps: false,
});

export default Score;