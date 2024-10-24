import React from 'react'
import { BsGraphUp } from "react-icons/bs";
import { FiGitlab } from "react-icons/fi";

export default function Logo() {
    return (
        <div className='flex items-center gap-4'>
            <FiGitlab className="text-white text-4xl"/>
            <h1 className='font-bold text-white text-lg'>
                <span className='text-blue-50'>If</span>inance
            </h1>
        </div>
    )
}
