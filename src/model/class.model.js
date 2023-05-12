import { Model, DataTypes } from 'sequelize';
import sequelize from './db.js';

class Lop extends Model{}

Lop.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idKhoa: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Lop',
    tableName: 'lop',
    timestamps: false
});

export default Lop;