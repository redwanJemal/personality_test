import React, {useState} from 'react'
import {toOptionChar} from '../../helper/toOptionChar'

const AnswerOptions = ({options}) => {
  const [selected, setSelected] = useState(null)

  const handleOptionSelected = (index) => {
    console.log('index', index)
  }

  return (
    <div>
      {
      options.map((option, index) => (
        <div className='flex cursor-pointer'  onClick={() => handleOptionSelected(index)}>
          <p>{ toOptionChar(index)}</p>
          <p className='pl-4 cursor-pointer'  key={index}>{option.text}</p>
        </div>
      ))}
    </div>
  )
}

export default AnswerOptions