'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {

    const pathname = usePathname()

    return (
        <nav>
            <ul className='flex gap-4 text-white '>
                <li><Link href="/" className={`${pathname === '/' && 'text-blue-400 border-b-blue-300 border-b-2'}`}>Home</Link></li>
                <li><Link href="/dashboard" className={`${pathname === '/dashboard' && 'text-blue-400 border-b--blue-400 border-b-2'}`}>Dashboard</Link></li>
                <li><Link href="/tickers"  className={`${pathname === '/tickers' &&  'text-blue-400 border-b-blue-400 border-b-2'}`}>Ações</Link></li>
                <li><Link href="/cadastro" className={`${pathname === '/cadastro' &&  'text-blue-400 border-b-blue-400 border-b-2'}`}>Cadastro</Link></li>
                
            </ul>
        </nav>
    )
}
