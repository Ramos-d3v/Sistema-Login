import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [message , setMessage] = useState("")

    const handleLogin = async (e) =>{
        e.preventDefault();
        setMessage("Fazendo o login...")

        try {
            const response = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password})
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Login realizado com sucesso")
                navigate("/dashboard")
            }else{
                setMessage(data.error || "Erro ao fazer login")
            }


        } catch (error) {
            console.error(error);
            setMessage("Erro ao conectar ao servidor")
        }
    };
    
  return (
    <div className='flex h-screen items-center justify-center flex-col bg-zinc-950 text-zinc-50 font-sans'>
        
        <h1 className='text-3xl font-semibold mb-8 tracking-tight'>Sistema de Login</h1>
        
        <div className='bg-zinc-900 border border-zinc-800 p-8 sm:p-10 rounded-2xl shadow-2xl w-11/12 max-w-sm'>
            <form className='flex flex-col w-full' onSubmit={handleLogin}>
                
                <h2 className='text-sm font-medium text-zinc-400 mb-2'>E-mail</h2>
                <input 
                    type="email"
                    placeholder='exemplo@email.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    className='bg-zinc-950 border border-zinc-800 rounded-lg p-3 mb-5 text-zinc-200 placeholder-zinc-700 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all'
                    required
                />

                <h2 className='text-sm font-medium text-zinc-400 mb-2'>Senha</h2>
                <input 
                    type="password" 
                    placeholder='••••••••' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className='bg-zinc-950 border border-zinc-800 rounded-lg p-3 mb-8 text-zinc-200 placeholder-zinc-700 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all'
                    required
                />
                
                <button 
                    type='submit' 
                    className='bg-zinc-50 text-zinc-950 font-semibold rounded-lg w-full py-3 hover:bg-zinc-200 transition-colors '
                >
                    Entrar
                </button>

            </form>

            {message && (
                <p className="mt-4 text-center text-sm font-medium text-amber-500">
                    {message}
                </p>
            )}

        </div>
        
    </div>
  )
}

export default Login