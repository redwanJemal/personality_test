import React from 'react'
import AnswerOptions from './Options'

const QuestionItem = ({item}) => {
  return (
    <div>
      <div className='flex flex-col items-start justify-start bg-gray-200 p-4'>
      <h2 className='text-md font-normal mb-4'>Question {item.questionNumber}</h2>
      <h2 className="text-2xl font-bold mb-4">{item.question}</h2>
      <div className="flex flex-col items-start">
        <AnswerOptions options={item.options} />
      </div>
    </div>
    </div>
  )
}

export default QuestionItem