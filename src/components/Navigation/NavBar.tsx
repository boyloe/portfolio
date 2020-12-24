import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { ImHome } from 'react-icons/im'
import { formatClassNames } from '../formatClassNames'
import { AiFillGithub } from 'react-icons/ai'
import { IoIosPaper } from 'react-icons/io'
import { GrContact } from 'react-icons/gr'

export const NavBar:React.FC = () => {
    // const [isShown, setisShown] = useState(false)
    return (
        <div className={formatClassNames(
            "w-full",
            "md:w-1/12", 
            "bg-gray-400", 
            "px-2 text-center", 
            "fixed", 
            "pin-b", 
            "md:pt-8", 
            "md:pin-t", 
            "md:pin-l", 
            "h-16", 
            "hidden",
            "md:h-screen", 
            // "md:border-r-2", 
            "md:border-grey-dark"
            )}
        >
            <nav className="md:relative mx-auto lg:px-6" >
                <ul className="list-reset flex flex-row md:flex-col text-center md:text-left">
                    <li className="mr-3 flex-1">
                        <NavLink className={formatClassNames(
                            "block",
                            "py-1", 
                            "md:py-3", 
                            "pl-1", 
                            "align-middle", 
                            "text-grey-darkest", 
                            "no-underline", 
                            "hover:text-pink",  
                            "border-grey-darkest", 
                            "md:border-black", 
                            "hover:border-pink"
                            )} 
                            to='/'
                        >
                            <ImHome className="pr-0" />
                            Home
                        </NavLink>                       
                    </li>                    
                    <li className="mr-3 flex-1">
                        <NavLink className={formatClassNames(
                            "block",
                            "py-1", 
                            "md:py-3", 
                            "pl-1", 
                            "align-middle", 
                            "text-grey-darkest", 
                            "no-underline", 
                            "hover:text-pink",  
                            "border-grey-darkest", 
                            "md:border-black", 
                            "hover:border-pink"
                            )} 
                            to='/projects'
                        >
                            <AiFillGithub className="pr-0" />
                            GitHub
                        </NavLink>                       
                    </li>                    
                    <li className="mr-3 flex-1">
                        <NavLink className={formatClassNames(
                            "block",
                            "py-1", 
                            "md:py-3", 
                            "pl-1", 
                            "align-middle", 
                            "text-grey-darkest", 
                            "no-underline", 
                            "hover:text-pink", 
                            "border-grey-darkest", 
                            "md:border-black", 
                            "hover:border-pink"
                            )} 
                            to='/resume'
                        >
                            <IoIosPaper className="pr-0" />
                            Resume
                        </NavLink>                       
                    </li>                    
                    <li className="mr-3 flex-1">
                        <NavLink className={formatClassNames(
                            "block",
                            "py-1", 
                            "md:py-3", 
                            "pl-1", 
                            "align-middle", 
                            "text-grey-darkest", 
                            "no-underline", 
                            "hover:text-pink",
                            "border-grey-darkest", 
                            "md:border-black", 
                            "hover:border-pink"
                            )} 
                            to='/contact'
                        >
                            <GrContact className="pr-0" />
                            Contact
                        </NavLink>                       
                    </li>                    
                </ul>
            </nav>            
        </div>
    )
}
