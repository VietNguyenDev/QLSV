export default (sequelize, DataTypes) => {
    const Subject = sequelize.define("subject", {
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
        }
    });
    return Subject;
};