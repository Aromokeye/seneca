import React, {useContext} from 'react'
import Header from '../Header'
import Options from '../Options'
import {QuestionContext} from '../../Context/QuestionContext'
import PropTypes from 'prop-types'
import './Questions.css'

const Question = () => {

    const dispatch = useContext(QuestionContext)
    
    return (
        <div className='h-100 flex flex-column justify-center items-center _questions center'>
            <Header text={dispatch.questionData.question}/>
                <Options />
            <Header text={dispatch.resultText}/>
        </div>
    )
}
export default Question

Question.propTypes = {
    dispatch: PropTypes.object
}