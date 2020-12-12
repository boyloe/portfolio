import React from 'react'
import OIMSgif from '../../assets/gifs/OIMS.gif'


export const ProjectCard:React.FC = () => {
    return (
        <div>
            <a href="https://github.com/boyloe/Oyloe-Inventory-Management-frontend">
                <img src={OIMSgif} alt="Oyloe Inventory Management" />
            </a>
        </div>
    )
}


