import React,{useEffect, useState} from 'react'
import useTestStore from '@/store/testStore';
import QuestionItem from './Item';
import Button from '../common/Button';

// const questions = [
//   {
//     id: 1,
//     questionNumber:1,
//     question: 'Yore really busy at work and a colleague is telling you their life story and personal woes. You?',
//     options: [
//       { id: 1, text: 'Don’t dare to interrupt them' },
//       { id: 2, text: 'Think it’s more important to give them some of your time; work can wait' },
//       { id: 3, text: 'Listen, but with only with half an ear' },
//     ]
//   },
//   {
//     id: 2,
//     questionNumber:2,
//     question: 'Who is CEO of Tesla?',
//     options: [
//       { id: 1, text: 'Don’t dare to interrupt them' },
//       { id: 2, text: 'Think it’s more important to give them some of your time; work can wait' },
//       { id: 3, text: 'Listen, but with only with half an ear' },
//     ]
//   }
// ];

const QuestionList= () => {
	const [questions, setQuestions] = useState(null)
  const data = useTestStore((state) => state.data)
  const loading = useTestStore((state) => state.loading)
	const getAllQuestions = useTestStore((state) => state.getAllQuestions)

  const loadQuestions = () => {
    getAllQuestions();
    if(data && data.items) {
			setQuestions(data.items)
		}
  }
  useEffect(() => {
		loadQuestions()
  }, [questions])
  
  if(loading) return <div>Loading...</div>

  return (
    <div>
      {
        !loading && !questions && 
        <div className='px-4'>
            <div>
              No questions found
            </div>
            <Button text={'Load Questions'} onClick={loadQuestions} />
          </div>
        
      }
      {
       questions && questions.map((question, index) => (
        <div  className='mb-4 px-4' key={index}>
          <QuestionItem  key={index} item={question} />
        </div>
       ))
      }
    </div>
  )
}

export default QuestionList