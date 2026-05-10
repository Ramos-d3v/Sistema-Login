require("dotenv").config();
const sqlite3 = require("sqlite3").verbose()
const { open } = require("sqlite")
const bcrypt = require("bcrypt")

async function getDbConnection() {
    
    try {

        const email_env = process.env.EMAIL_ADMIN
        const password_env = process.env.PASSWORD_ADMIN
        
        const db = await open({
            filename: "DB.sqlite",
            driver: sqlite3.Database
        })

        await db.exec(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL
            );            
            
            `)
        
        const userExiste = await db.get(`
            SELECT id FROM users WHERE email = ?
            `, [email_env])

        if (!userExiste) {
                const hashPassword = await bcrypt.hash(password_env, 10)
                await db.run(`
                        INSERT INTO users (email, password) VALUES (? , ?)
                    `, [email_env, hashPassword])

                console.log("USUARIO ADMIN CRIADO COM SUCESSO");
        }

        return db
    } catch (error) {
        console.error("Erro ao conectar ou criar o banco de dados" + error)
    }
}

module.exports = getDbConnection;