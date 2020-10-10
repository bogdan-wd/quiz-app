import React from 'react';
import styles from './AnswersList.module.css';
import AnswerItem from './AnswerItem/AnswerItem';


const AnswersList = props => (
    <ul className={styles.answersList}>
        {props.answers.map((answer, idx) =>{
            return (
                <AnswerItem
                answer={answer}
                key={idx}
                onAnswerClick={props.onAnswerClick}/>
            )
        })}
    </ul>
)

export default AnswersList