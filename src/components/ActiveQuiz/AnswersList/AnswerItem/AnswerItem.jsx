import React from 'react';
import styles from './AnswerItem.module.css';

const AnswerItem = props => {
  return (
    <li
      className={styles.answerItem}
      onClick={() => props.onAnswerClick (props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};

export default AnswerItem;
