require('dotenv').config();

module.exports = {
    client: "mysql2", //banco que estou usando
    connection: {
        database: process.env.DB_DATABASE, // create database apicap;
		user: process.env.DB_USER, 
		password: process.env.DB_PASSWORD,
		port: process.env.DB_PORT
    },
    migrations: {
        tableName: "migrations", // nome da tabela que será criada no bd
        directory: `${__dirname}/src/database/migrations`
    }
}