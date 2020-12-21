import React from 'react'
import { ReactTypical } from '@deadcoder0904/react-typical'

export const IntroBox:React.FC = () => {
    return (
        <div className="h-1/3 w-full flex flex-col justify-center md:items-start px-6 mt-10 md:h-1/4 md:mt-36 md:w-1/2">
            <div className="">
                <ReactTypical 
                    className="text-3xl py-2 font-tech text-black" 
                    steps={[2000,'Hello,']}
                />
            </div>
                <ReactTypical 
                    className="text-3xl py-2 font-tech text-black" 
                    steps={[4000, 'My Name is Bryan Oyloe.']}
                />
            <div>
                <ReactTypical 
                    className="text-3xl py-2 font-tech text-black" 
                    steps={[6000, 'I am a Full Stack Software Engineer.']}
                />
            </div>
        </div>
    )
}