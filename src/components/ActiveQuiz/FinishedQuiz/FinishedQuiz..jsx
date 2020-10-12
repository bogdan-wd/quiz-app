import React from 'react';
import styles from './FinishedQuiz.module.css';

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) =>{
        if(props.results[key] === 'success'){
            total++
        }
        return total
    }, 0)
    console.log(props.results);
  return (
    <div className={styles.finishedQuiz}>
      <ul>

        {props.quiz.map ((item, idx) => {
          const classes = [
            'fa',
            props.results[item.id] === 'error' ? 'fa-times' : 'fa-check',
            styles[props.results[item.id]],
          ];
          return (
            <li className={''} key={idx}>
              <strong>{idx + 1}</strong> &nbsp;
              {item.question}
              <i className={classes.join (' ')} />
            </li>
          );
        })}
      </ul>

      <p>
        Правильно {successCount} из {props.quiz.length}
      </p>

      <div>
        <button onClick={props.onRetry}>Повторить</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
