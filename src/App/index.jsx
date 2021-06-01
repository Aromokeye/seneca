import { useEffect, useState } from 'react';
import Question from '../components/Question';
import PropTypes from 'prop-types';
import {QuestionContext} from '../Context/QuestionContext'
import {questionsArr} from '../Utilities/data'
import './App.css';


const App = () => {

  const [background, setBackground] = useState('_start')
  const [responses, setResponses] = useState([])
  const [resultText, setResultText] = useState(null)


  //make default responses
  useEffect ( () => {
    if(questionsArr.length > 0){
      const defaultResponses = questionsArr[0].answers.map( a => 
          a.map( (b, i) => {
            return {...b,  selected: false}
          })
         
        )
      setResponses(defaultResponses)
    }
  }, [])

  //watch success of responses
  useEffect( () => {
    if(responses.length > 0) {
      const filtered = []
      for(let i=0; i < responses.length; i++){
        responses[i].forEach( option =>{ 
          if(option.selected && option.isCorrect){
              filtered.push(option)
          }})
      }
     const totalCorrect= filtered.length
     const percentageCorrect = totalCorrect/responses.length * 100

     filtered.length > 0 &&  (totalCorrect < responses.length 
     ? setResultText('The answer is Incomplete')
     : setResultText('The answer is Correct!'))

      //alter backgrounds
    
        if(percentageCorrect <= 30){
          setBackground('_start')
        }else if(percentageCorrect > 30 && percentageCorrect <= 50){
          setBackground('_close')
        }else if (percentageCorrect > 50 && percentageCorrect <=70){
          setBackground('_closer')
        }else if(percentageCorrect === 100){
          setBackground('_correct')
        }
        
    }
    
    
  }, [responses])

  const globalState = {
    questionData: questionsArr[0],
    setBackground,
    resultText,
    setResponses,
    responses,
  }

  return (
    <div className={`vh-100 w-100 center ${background}`}>
      <QuestionContext.Provider value={globalState}>
        <Question />
      </QuestionContext.Provider>
    </div>
  );
}

export default App;

App.propTypes = {
  globalState: PropTypes.shape({
    resultText: PropTypes.string,
    setResponses: PropTypes.func,
    responses: PropTypes.array,
    questionData: PropTypes.shape({
      question: PropTypes.string,
      answers: PropTypes.array,
    })
  }),
  background: PropTypes.string,
  
}
