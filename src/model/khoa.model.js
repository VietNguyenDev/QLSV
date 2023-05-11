export default (sequelize, DataTypes) => {
    const Khoa = sequelize.define("khoa", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Khoa;
};