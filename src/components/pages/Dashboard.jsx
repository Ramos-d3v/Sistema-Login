import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DB } from '../../DB/DB';

const Dashboard = () => {
    
    const navigate = useNavigate();
    const [mockData, setMockData] = useState(DB) 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const usuariosSalvos = JSON.parse(localStorage.getItem("usuariosApp"))
        setMockData(usuariosSalvos)
    },[])

    const handleRegister = (e) =>{
        e.preventDefault();
        const alredyRegister = mockData.find(user => user.email === email)

        if(!alredyRegister){
            const newUser = {
                email: email,
                password: password
            }

            const novosDados = [...mockData, newUser];

            setMockData(novosDados)
            setEmail("")
            setPassword("")

            localStorage.setItem("usuariosApp",JSON.stringify(novosDados))

            console.log(localStorage.getItem("usuariosApp"))
            alert("Cadastrado com sucesso")
        }else{
            console.log(localStorage.getItem("usuariosApp"));
            alert("Usuario já cadastrado")
            
        }

    }


    return (
    <div className='flex h-screen items-center justify-center flex-col'>
        <h1>Dashboard</h1>
        <div className='flex flex-col items-center justify-center bg-amber-400 h-3/4 w-2/4'>
            <h2>Cadatro de clientes</h2>

            <form onSubmit={handleRegister}>

                <h3>Cadastre o email</h3>
                <input type="email" 
                placeholder='exemplo@gmail.com'
                value={email}
                onChange={(e) => { setEmail(e.target.value)}}
                required />

                <h3>Cadastre a senha</h3>
                <input type="password" 
                placeholder='Senha'
                value={password}
                onChange={(e) => { setPassword(e.target.value)}}
                required />

                <button type='submit'>Registrar</button>

            </form>

        


        </div>
        <button onClick={() => navigate("/login")}>Voltar para o login</button>
    </div>
  )
}

export default Dashboard