import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar:React.FC = () => {
    return (
        <nav>
            <Link className="" to='/'>Home</Link>
            <Link className="" to='/projects'>Projects</Link>
            <Link className="" to='/skills'>Skills</Link>
            <Link className="" to='/blog'>Blog</Link>
            <Link className="" to='/contact'>Contact</Link>
        </nav>
    )
}
