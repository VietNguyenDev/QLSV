import { Model, DataTypes } from 'sequelize';
import sequelize from './db.js';

class Khoa extends Model{}

Khoa.init({
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
    modelName: 'Khoa',
    tableName: 'khoa',
    timestamps: false
});

export default Khoa;