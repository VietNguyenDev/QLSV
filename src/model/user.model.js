import { Model, DataTypes } from "sequelize";
import sequelize from "./db.js";

class User extends Model {}
User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false
    },
    fullName: {
        type: DataTypes.STRING,
    },
    dateOfBirth: {
        type: DataTypes.DATE,
    },
    idClass: {
        type: DataTypes.INTEGER,
    },
    idDepartment: {
        type: DataTypes.INTEGER,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
});

export default User;
