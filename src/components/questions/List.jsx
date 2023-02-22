import React from 'react'
import QuestionItem from './Item';

const questions = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: [
      { id: 1, text: 'New York' },
      { id: 2, text: 'London' },
      { id: 3, text: 'Paris' },
    ]
  },
  {
    id: 2,
    question: 'Who is CEO of Tesla?',
    options: [
      { id: 1, text: 'Jeff Bezos' },
      { id: 2, text: 'Elon Musk' },
      { id: 3, text: 'Bill Gates' },
    ]
  }
];

const QuestionList= () => {
  return (
    <div>
      {
      questions.map((question, index) => (
        <QuestionItem key={index} item={question} />
      ))}
    </div>
  )
}

export default QuestionList