import React from 'react'
import Button from '../components/common/Button'
import QuestionList from '../components/questions/List'

const Questions = () => {
  const handleSubmit = () => {
		console.log('submitted')
	}

  return (
    <div>
      <div className='mt-4 px-4'>
        <h1 className='text-3xl font-bold'>This is a simple application, that takes 5 different questions, maps them into a score and produces a personality trait of either Introvert or Extrovert</h1>
        <h1 className='mt-4 text-2xl font-bold'>Are you an <span className='text-blue-900'>introvert</span> or an <span className='text-green-900'>extrovert</span>?</h1>
        <h1 className='mt-4 text-2xl'>Please answer below questions carefully!!</h1>
      </div>
      <div className='mt-4'>
      <QuestionList />
      </div>
      <div className='p-4 mt-4'>
				<Button text={'Submit'} onClick={handleSubmit} />
			</div>
    </div>
  )
}

export default Questions