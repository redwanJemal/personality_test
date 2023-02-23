import React,{useEffect, useState} from 'react'
import useTestStore from '@/store/testStore';
import QuestionItem from './Item';
import Button from '../common/Button';

const QuestionList= () => {
  const questions = useTestStore((state) => state.data)
  const loading = useTestStore((state) => state.loading)
	const getAllQuestions = useTestStore((state) => state.getAllQuestions)
  const error  = useTestStore((state) => state.error)

  const loadQuestions = () => {
    getAllQuestions();
  }
  
  useEffect(() => {
		loadQuestions()
  }, [])
  
  if(loading){
    return (
      <div className='px-4 h-[32rem] flex flex-col justify-center items-center'>
        <div>
          Loading ...
        </div>
      </div>
    )
  }
  if(error){
    return (
      <div className='px-4 h-[32rem] flex flex-col justify-center items-center'>
        <div>
          Error Loading Questions
        </div>
        <div className='mt-4'>
        <Button text={'Try again'} onClick={loadQuestions} />
        </div>
      </div>
    )
  }
  return (
    <div>
      {
        !loading && !questions && 
        <div className='px-4 h-[32rem] flex flex-col justify-center items-center'>
            <div>
              No questions found
            </div>
            <Button text={'Load Questions'} onClick={loadQuestions} />
          </div>
        
      }
      {
       questions && questions.items.map((question, index) => (
        <div  className='mb-4 px-4' key={index}>
          <QuestionItem  key={index} item={question} />
        </div>
       ))
      }
    </div>
  )
}

export default QuestionList