import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import Button from '../components/common/Button'
import QuestionList from '../components/questions/List'
import useTestStore from '../store/testStore'

const Questions = () => {
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(null)
  const loading = useTestStore((state) => state.loading)
  const answer = useTestStore((state) => state.answer)
  const questions = useTestStore((state) => state.data)
  const postAnswer = useTestStore((state) => state.postAnswer)
  const result = useTestStore((state) => state.result)

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if(questions && questions.items.length == Object.keys(answer).length) {
      setAllQuestionsAnswered(true)
      await postAnswer();
      if(!loading && result){
        navigate('/result', {replace: true})
      }
    }
    else{
      setAllQuestionsAnswered(false)
    }
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
      <div className='px-4'>
        {
          allQuestionsAnswered === false && 
          <h2 className='p-2 text-2xl text-red-500'>Please Answer All Questions!!</h2>
        }
      </div>
      {
        questions && questions.items.length > 0 && 
        <div className='p-4 mt-4'>
				<Button loading={loading} text={'Submit'} onClick={handleSubmit} />
			</div>
      }
    </div>
  )
}

export default Questions