import React from 'react'
import AnswerOptions from './Options'

const QuestionItem = ({item}) => {
  return (
    <div>
      <h2>{item.question}</h2>
      <AnswerOptions options={item.options} />
    </div>
  )
}

export default QuestionItem