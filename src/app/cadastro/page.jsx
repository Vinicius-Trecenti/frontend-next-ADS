'use client'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {useState} from "react"

export default function Cadastro() {
    
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = async () => {
        console.log({ nome, email, pass })
        
        const response = await fetch('http://localhost:4000/user', {
            method: 'POST', 
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({ name:nome, email, pass })
        })

        if (response?.ok) {
            const data = await response.json()
            console.log(data)
        }
        else {
            const data = await response.json()
            console.log(data)
        }
    }
    
    return (
        <>
            <Header />
                <main className='p-5'>
                    <h1 className='text-blue-700 text-3xl'>Cadastro-se</h1>

                    <div className='flex flex-col gap-2 p-4 w-80'>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" value={nome} onChange={event => setNome(event.target.value)} className='border border-1 border-black rounded-md p-1' />
                    
                        <label htmlFor="nome">Email:</label>
                        <input type="text" value={email} onChange={event => setEmail(event.target.value)} className='border border-1 border-black rounded-md p-1' />
                    
                        <label htmlFor="nome">Password:</label>
                        <input type="text" value={pass} onChange={event => setPass(event.target.value)} className='border border-1 border-black rounded-md p-1' />

                    {/* <button className='w-28 p-2 border border-1 border-black rounded-sm bg-blue-500' onClick={() => setNome("Camila")}>Mudar nome</button> */}
                    
                    <button className='w-32 p-2 border border-1 border-black rounded-sm bg-blue-500 hover:bg-blue-400' onClick={handleSubmit}>Enviar</button>
                    </div>
                </main>
            
            <Footer/>
        </>
    )
}
