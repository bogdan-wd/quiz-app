import React from 'react';
import styles from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props => (
    <div className={styles.activeQuiz}>
        <p className={styles.question}>
            <span>
                <strong>
                    1.
                </strong> &nbsp;
                Question
            </span>
            <small> 4/12</small>
        </p>

       <AnswersList
        answers={props.answers}
       />
    </div>
)

export default ActiveQuiz