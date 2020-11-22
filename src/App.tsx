import React from 'react';
import BryanPic from './assets/BryanNicePhoto.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faDev, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="flex justify-center overflow-hidden py-10 container">
      <div className="max-w-xs rounded-lg  shadow-lg bg-gray-100">
        <img className="w-full rounded" src={BryanPic} alt="Bryan" />
        <div className="px-6 py-4">
          <div className="font-bold text-blue-500 text-xl mb-2">
            Bryan Oyloe - Full Stack Software Engineer
          </div>
          <p className="text-gray-700 text-base">
            Full Stack Software engineer with a 9+ year background in Petroleum Engineering. 
            Passionate about using my skills in React, React Native, Ruby, Rails, 
            and Node to design creative solutions for clients. 
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
