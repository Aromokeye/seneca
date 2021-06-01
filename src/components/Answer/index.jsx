import React, { useContext, useState } from 'react'
import {QuestionContext} from '../../Context/QuestionContext'
import PropTypes from 'prop-types';
import './Answer.css'

const Answer = ({answerArr, index}) => {

    const [banner, setBanner] = useState('')
    
    const dispatch = useContext(QuestionContext)
  

    //update and track responses
    const upDateResponses = (clickedIndex) => {
        dispatch.responses[index].map( (option, x) => 
            x === clickedIndex ? option.selected = true : option.selected = false 
        )

       return dispatch.setResponses( state => ([...state]))
    }
    return (
        <div 
            className={`flex w-60-l w-80-m w-100 ba b--white bw1 br-pill b f4 ma1 relative ${banner}`}>
            {answerArr.map((answer, i) =>
                <div className='w-100 flex items-center justify-center h3' key={i*34}>
                    <div 
                        className={`pa2 pointer ${banner !== '_answer-left' && 'white'}`} 
                        onClick={() => {setBanner('_answer-left'); upDateResponses(i)}} aria-hidden="true">
                        {answer.odd}
                    </div>
                    <div 
                        className={`pa2 pointer ${banner !== '_answer-right' && 'white' }`} 
                        onClick={() => {setBanner('_answer-right'); upDateResponses(i)}} aria-hidden="true">
                        {answer.even}
                    </div>
                </div>    
            )}
        </div>
    )
}
export default Answer

Answer.propTypes = {
    dispatch: PropTypes.shape({
        setResponses: PropTypes.func,
        responses: PropTypes.array,
    }),
    
}