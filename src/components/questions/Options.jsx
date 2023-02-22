import React, {useState} from 'react'

const AnswerOptions = ({options}) => {
  const [selected, setSelected] = useState(null)

  const handleOptionSelected = (index) => {
    console.log('index', index)
  }

  return (
    <div>
      {
      options.map((option, index) => (
        <p className='pl-4 cursor-pointer' onClick={() => handleOptionSelected(index)} key={index}>{option.text}</p>
      ))}
    </div>
  )
}

export default AnswerOptions