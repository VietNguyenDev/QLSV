export default (sequelize, DataTypes) => {
    const Student = sequelize.define("student", {
        id: {
            type: DataTypes.INTEGER,
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
    });
    return Student;
};