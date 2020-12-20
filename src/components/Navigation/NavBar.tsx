import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar:React.FC = () => {
    return (
        <div>
            <nav className="bg-gray-300 text-black font-tech flex flex-col w-full md:flex-row py-4 px-3 justify-end min-h-8" >
                <Link className="px-3 text-2xl mx-3 my-2" to='/'>Home</Link>
                <Link className="px-3 text-2xl mx-3 my-2" to='/projects'>Projects</Link>
                <Link className="px-3 text-2xl mx-3 my-2" to='/resume'>Resume</Link>
                {/* <Link className="px-3 text-2xl mx-2 my-2" to='/blog'>Blog</Link> */}
                <Link className="px-3 text-2xl mx-3 my-2" to='/contact'>Contact</Link>
            </nav>            
        </div>
    )
}
