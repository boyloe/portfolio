import React from 'react'
import { ReactTypical } from '@deadcoder0904/react-typical'

export const IntroBox:React.FC = () => {
    return (
        <div className="h-screen w-96 flex flex-col justify-center items-start pb-20">
            <div>
                <ReactTypical 
                    className="text-3xl py-2 font-tech text-black" 
                    steps={[1000,'Hello,']}
                />
            </div>
                <ReactTypical 
                    className="text-3xl py-2 font-tech text-black" 
                    steps={[3000, 'My Name is Bryan Oyloe.']}
                />
            <div>
                <ReactTypical 
                    className="text-3xl py-2 font-tech text-black" 
                    steps={[5000, 'I am a Full Stack Software Engineer.']}
                />
            </div>
        </div>
    )
}