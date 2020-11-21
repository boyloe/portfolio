import React from 'react';
import BryanPic from './assets/BryanNicePhoto.jpg'


function App() {
  return (
    <div className="flex justify-center py-10">
      <div className="max-w-xs rounded overflow-hidden shadow-lg bg-gray-100">
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
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #FullStackEngineer
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #TypescriptDev
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2">
            #OutdoorLife
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
