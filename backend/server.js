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

app.listen(3000, async () => {
    console.log("sevidor rodando na porta 3000")

    try {
        await getDbConnection();
        console.log("BAnco de dados criado com sucesso");
        
    } catch (error) {
        console.error("Erro ao criar o banco de dados");
        
    }
})