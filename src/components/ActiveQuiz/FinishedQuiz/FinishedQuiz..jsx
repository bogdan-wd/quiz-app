import React from 'react';
import styles from './FinishedQuiz.module.css';

const FinishedQuiz = props => {
  return (
    <div className={styles.finishedQuiz}>
      <ul>
        <li>
         1. How are you
          <i className={'fa fa-times ' + styles.error} />
        </li>
        <li>
         2. How are you
          <i className={'fa fa-check ' + styles.success} />
        </li>
      </ul>

      <p>
        Правильно 1 из 10
      </p>

      <div>
        <button>Повторить</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
