export default (sequelize, DataTypes) => {
    const Teacher = sequelize.define("teacher", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idKhoa: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
    return Teacher;
};