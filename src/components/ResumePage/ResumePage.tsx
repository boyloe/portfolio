import React from 'react' 
import Resume from '../../assets/Bryan-Oyloe-SE-Resume.pdf'






export const ResumePage:React.FC = () => {


    return (
    <div className="h-screen bg-blue-line-wave bg-cover flex justify-center">

            <iframe title='resume' className="h-1/2" src={Resume}></iframe>            

    </div>
    )
}