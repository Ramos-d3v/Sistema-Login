const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const getDbConnection = require("./database.js");



const app = express();
app.use(cors())
app.use(express.json())

// Rota para login 
app.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const db = await getDbConnection();

        const user = await db.get(
            `SELECT * FROM users WHERE email = ?`, [email]
        )

        if(!user){
            return res.status(401).json({
                error: "Email ou senha incorretos"
            })
        }

        const senhaCorreta = await bcrypt.compare(password, user.password)

        if (senhaCorreta) {
            res.status(200).json({
                message: "Login realizado com sucesso"
            })
        }else{
            res.status(401).json({
                error: "Senha ou email invalidos"
            })
        }

    } catch (error) {
        console.error("erro ao listar usuarios")
        res.status(500).json({
            error: "Erro interno do servidor"
        })
    }
})

// Criando rota de cadastro de usuarios
app.post("/api/register", async (req, res) => {
    try {
        
        const {email, password} = req.body

        const db = await getDbConnection();
        
        const hashPassword = await bcrypt.hash(password , 10)

        const users = await db.get(
                `SELECT * FROM users WHERE email = ?`, [email]
            )

        if (users) {
            return res.status(409).json({
                message: "Usuario ja cadastrado"
            })
        }

        const result = await db.run(`
                INSERT INTO users (email, password) VALUES (?, ?)
            `, [email, hashPassword])
        
        res.status(200).json({
            message: "Usuario cadastrado com sucesso",
            id: result.lastID 
        })

    } catch (error) {
        console.error("Erro no servidor")
        res.status(500).json({
            error: "erro inerno no servidor"
        })
    }

})



//Rota para listar usuarios
app.get('/api/getUsers', async (req, res) => {

    try {
        
        const db = await getDbConnection();
        
        const users = await db.all(`SELECT id, email FROM users`);
        
        res.status(200).json(users)
    
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Erro ao se conectar com servidor."
        })
    }
})

app.delete('/api/users/:id', async (req, res) => {

    try {
        
        const { id } = req.params

        const db = await getDbConnection();

        if (!id) {
            return res.status(400).json({
                message: "ID não fornecido"
            })
        }

        const result = await db.run(`
                DELETE FROM users WHERE id = ?;
            `, [id])

        if (result.changes === 0) {
            return res.status(404).json({
                error: "Usuario não encontrado"
            })
        }

        res.status(200).json({
            message: "Usuario deletado com sucesso"
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Erro ao conectar com servidor"
        })
    }



})


app.listen(3000, async () => {
    console.log("sevidor rodando na porta 3000")

    try {
        await getDbConnection();
        console.log("Banco de dados criado com sucesso");
    } catch (error) {
        console.error("Erro ao criar o banco de dados");
    }
})