import React from 'react';
import {Link} from 'react-router-dom'
import useTestStore from '../store/testStore';

const ResultScreen = ( ) => {
  const result = useTestStore((state) => state.result);
  const error = useTestStore((state) => state.error);

  if(error) {
    return (
      <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center mb-8">Error Occured!</h1>
      <p className="text-lg text-center mb-8">
        Please check your connection and try again
      </p>
      <button className="bg-gray-500 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
        <Link to="/">Retake Test</Link>
      </button>
    </div>
    );
  }
  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center mb-8">Congratulations!</h1>
      <p className="text-lg text-center mb-8">
        Based on your answers, your personality trait is {result && <span className='text-blue-900 font-bold text-2xl'>{result.result}</span>}
      </p>
      <button className="bg-gray-500 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
        <Link to="/">Retake Test</Link>
      </button>
    </div>
  );
};

export default ResultScreen;