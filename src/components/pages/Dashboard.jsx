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

            console.log("\n" + localStorage.getItem("usuariosApp"))
            alert("Cadastrado com sucesso")
        }else{
            console.log(localStorage.getItem("usuariosApp"));
            alert("Usuario já cadastrado")
            
        }

    }


    return (
    <div className='flex min-h-screen items-center justify-center flex-col bg-zinc-950 text-zinc-50 font-sans p-6'>
            
            <div className='w-full max-w-3xl flex justify-between items-center mb-8'>
                <h1 className='text-3xl font-semibold tracking-tight'>Painel Admin</h1>
                <button 
                    onClick={() => navigate("/login")}
                    className='bg-zinc-800 border border-zinc-700 text-zinc-300 text-sm font-medium rounded-lg px-4 py-2 hover:bg-zinc-700 hover:text-white transition-all'
                >
                    Sair
                </button>
            </div>
            
            <div className='bg-zinc-900 border border-zinc-800 p-8 sm:p-10 rounded-2xl shadow-2xl w-full max-w-3xl mb-8 flex flex-col md:flex-row gap-10'>
                
                {/* Lado Esquerdo: Formulário de Cadastro */}
                <div className='flex-1 border-b md:border-b-0 md:border-r border-zinc-800 pb-8 md:pb-0 md:pr-8'>
                    <h2 className='text-xl font-medium text-white mb-6'>Cadastrar Cliente</h2>

                    <form onSubmit={handleRegister} className='flex flex-col gap-5'>
                        <div>
                            <h3 className='text-sm font-medium text-zinc-400 mb-2'>E-mail do cliente</h3>
                            <input 
                                type="email" 
                                placeholder='exemplo@gmail.com'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='bg-zinc-950 w-full border border-zinc-800 rounded-lg p-3 text-zinc-200 placeholder-zinc-700 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all'
                                required 
                            />
                        </div>

                        <div>
                            <h3 className='text-sm font-medium text-zinc-400 mb-2'>Senha temporária</h3>
                            <input 
                                type="password" 
                                placeholder='••••••••'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='bg-zinc-950 w-full border border-zinc-800 rounded-lg p-3 text-zinc-200 placeholder-zinc-700 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all'
                                required 
                            />
                        </div>

                        <button 
                            type='submit'
                            className='bg-zinc-50 text-zinc-950 font-semibold rounded-lg w-full py-3 mt-2 hover:bg-zinc-200 transition-colors'
                        >
                            Registrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )   
}

export default Dashboard