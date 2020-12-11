import React from 'react'
import { IntroBox } from './IntroBox'


export const HomePage:React.FC = () => {
    return (     
        <div className="h-screen bg-blue-line-wave bg-cover flex justify-center">
            <IntroBox />
        </div>
    )
}