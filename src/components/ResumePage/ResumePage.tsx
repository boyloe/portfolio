import React from 'react' 
import Resume from '../../assets/Bryan-Oyloe-SE-Resume.pdf'






export const ResumePage:React.FC = () => {


    return (
    <div className="h-screen bg-blue-line-wave bg-cover flex justify-center">
        <iframe title='resume' className="h-1/3 transform scale-150" src={Resume}></iframe>    
        <h1 className="text-2xl transform -rotate-90">Resume</h1>
    </div>
    )
}