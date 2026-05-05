import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    
    const navigate = useNavigate();
    


    return (
    <div className='flex h-screen items-center justify-center flex-col'>
        <h1>Dashboard</h1>
        <div className='flex flex-col bg-amber-400 h-3/4 w-2/4'>
        


        </div>
        <button onClick={() => navigate("/login")}>Voltar para o login</button>
    </div>
  )
}

export default Dashboard