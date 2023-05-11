const databaseConfig = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Nguyenviet2510",
    DB: "qlsv",
    dialect: "mysql", 
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

export default databaseConfig;