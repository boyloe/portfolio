import React from 'react';
import BryanPic from './assets/BryanNicePhoto.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faDev, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="flex justify-center border-solid border-2 border-black overflow-hidden py-12 bg-gradient-to-tl from-white via-gray-200 to-blue-300 w-screen h-screen">
      <div className="max-w-xs max-h-72 rounded-xl shadow-lg bg-gray-100 border-solid border-2 border-black">
        <img className="w-full rounded-xl" src={BryanPic} alt="Bryan" />
        <div className="px-2 py-4">
          <h3 className="font-bold text-blue-900 text-2xl ">
            Bryan Oyloe
          </h3>
          <h5 className="font-bold text-blue-800 text-sm mb-4">
            Full Stack Software Engineer
          </h5>
          <p className="text-blue-900 text-base">
            Full Stack Software engineer with a 9+ year background in Petroleum Engineering. 
            Passionate about using my skills in React, React Native, Ruby, Rails, 
            and Node to design creative solutions for my clients. 
          </p>
        </div>
        <div className="px-6 py-4 flex space-x-8">
          <a href="https://www.linkedin.com/in/bryan-oyloe">  
            <FontAwesomeIcon icon={faLinkedin} color='blue' size='3x' />
          </a>
          <a href="https://www.github.com/boyloe">  
            <FontAwesomeIcon icon={faGithubSquare} size='3x'/>
          </a>
          <a href="https://www.dev.to/boyloe">  
            <FontAwesomeIcon icon={faDev} size='3x'/>
          </a>
          <a href="mailto:boyloe@gmail.com">  
            <FontAwesomeIcon icon={faEnvelopeSquare} size='3x' color='red'/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
