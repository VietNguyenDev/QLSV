export default (sequelize, DataTypes) => {
    const Score = sequelize.define("score", {
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idSubject: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
    return Score;
};