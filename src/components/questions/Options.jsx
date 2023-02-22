import React, {useState} from 'react'
import {toOptionChar} from '../../helper/toOptionChar'

const AnswerOptions = ({options}) => {
  const [selected, setSelected] = useState(null)

  const handleOptionSelected = (index) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  }

  return (
    <div className='flex flex-col justify-start items-start'>
      {
      options.map((option, index) => (
        <div
        key={`op ${index}`}
        className={`py-2 px-4 mb-2 cursor-pointer ${
          selected === index ? 'border border-red-800 bg-white text-black' : 'bg-white text-gray-700'
        }`}
        onClick={() => handleOptionSelected(index)}
      >
       <div className='flex justify-center'>
         <span className={`px-3 py-1 m-auto ${selected === index? 'bg-red-500 text-white':'bg-gray-200'}`}>{ toOptionChar(index)}</span>
         <span className='ml-4 m-auto'>{option.text}</span>
       </div>
      </div>
      ))}
    </div>
  )
}

export default AnswerOptions