import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/getUsers");
            const data = await response.json();
            
            if (response.ok) {
                setUsers(data);
            }
        } catch (error) {
            console.error("Erro ao carregar usuários:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if(!window.confirm("Tem certeza que deseja deletar esse usuario?")){
            return;
        }
        
        try {
            const response = await fetch(`http://localhost:3000/api/users/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
                setUsers(users.filter((user) => user.id !== id));
            } else {
                alert(data.error || "Erro ao deletar usuario");
            }

        } catch (error) {
            console.error(error);
            alert("Erro ao conectar com servidor");
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className='min-h-screen bg-zinc-950 text-zinc-50 font-sans p-4 sm:p-8'>
            {/* Header do Dashboard */}
            <div className='max-w-4xl mx-auto flex justify-between items-center mb-10'>
                <div>
                    <h1 className='text-2xl font-bold tracking-tight'>Painel de Controle</h1>
                    <p className='text-zinc-500 text-sm'>Gerenciamento de usuários cadastrados</p>
                </div>
                <button 
                    onClick={() => navigate("/")}
                    className='bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 px-4 py-2 rounded-lg text-sm font-medium transition-all'
                >
                    Sair do Sistema
                </button>
            </div>

            {/* Container Principal */}
            <div className='max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden'>
                <div className='p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/50'>
                    <h2 className='font-semibold text-zinc-200'>Lista de Usuários</h2>
                    <span className='bg-zinc-800 text-zinc-400 text-xs px-2 py-1 rounded-full'>
                        {users.length} total
                    </span>
                </div>

                <div className='p-6'>
                    {loading ? (
                        <p className='text-center text-zinc-500 animate-pulse'>Carregando dados...</p>
                    ) : users.length === 0 ? (
                        <div className='text-center py-10'>
                            <p className='text-zinc-500 italic'>Nenhum usuário encontrado no banco de dados.</p>
                        </div>
                    ) : (
                        <div className='grid gap-3'>
                            {users.map((user) => (
                                <div 
                                    key={user.id} 
                                    className='group flex items-center justify-between p-4 bg-zinc-950/50 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-all'
                                >
                                    <div className='flex items-center gap-4'>
                                        {/* Avatar Icon */}
                                        <div className='w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-50 group-hover:text-zinc-950 transition-colors'>
                                            {user.email.charAt(0).toUpperCase()}
                                        </div>
                                        
                                        <div className='flex flex-col'>
                                            <span className='text-sm font-medium text-zinc-200'>{user.email}</span>
                                            <span className='text-[10px] uppercase tracking-wider text-zinc-600'>Acesso padrão</span>
                                        </div>
                                    </div>

                                    {/* Adicionado a div que engloba o ID e o Botão de Deletar */}
                                    <div className='flex items-center gap-4'>
                                        <span className='text-xs font-mono text-zinc-700 bg-zinc-900 px-2 py-1 rounded'>
                                            ID: {user.id}
                                        </span>
                                        
                                        {/* BOTÃO DE DELETAR COM ÍCONE */}
                                        <button 
                                            onClick={() => handleDelete(user.id)}
                                            className='p-2 text-zinc-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all'
                                            title="Deletar Usuário"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M3 6h18"></path>
                                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className='p-4 bg-zinc-800/30 border-t border-zinc-800 text-center'>
                    <button 
                        onClick={fetchUsers}
                        className='text-xs text-zinc-500 hover:text-zinc-300 transition-colors underline underline-offset-4'
                    >
                        Atualizar lista manualmente
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;