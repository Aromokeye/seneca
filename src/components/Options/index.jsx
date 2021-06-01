import React, {useContext, Fragment} from 'react'
import {QuestionContext} from '../../Context/QuestionContext'
import PropTypes from 'prop-types';
import Answer from '../Answer'

const Options = () => {

    const data = useContext(QuestionContext)

    return (
        <Fragment>
            {data.questionData.answers.map((answer, index) =>
                <Answer answerArr={answer} key={index} index={index}/>
            )}
        </Fragment>
    )
}

export default Options

Options.propTypes = {
    /**
   * A prop that should not be visible in the documentation.
   *
   * @ignore
   */
    data: PropTypes.shape({
        questionData: PropTypes.shape({
            answers: PropTypes.array,
          })
    }),
    
}

