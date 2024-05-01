require('dotenv').config();

module.exports = {
    client: "mysql2", //banco que estou usando
    connection: {
        database: "apicap", // create database apicap;
		user: process.env.DB_USER, 
		password: process.env.DB_PASS,
		port: 3306
    },
    migrations: {
        tableName: "migrations", // nome da tabela que será criada no bd
        directory: `${__dirname}/src/database/migrations`
    }
}