export default (sequelize, DataTypes) => { 
    const Class = sequelize.define("class", {
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
    });
    return Class;
};