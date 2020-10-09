import React, {Component} from 'react';
import styles from './Quiz.module.css';
import ActiveQuiz from './../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
  state = {
    quiz: [
      {
        answers: [
          {
            text: 'Question 1',
          },
          {
            text: 'Question 1',
          },
          {
            text: 'Question 1',
          },
          {
            text: 'Question 1',
          },
        ],
      },
    ],
  };

  render () {
    return (
      <div className={styles.quiz}>
        <div className={styles.quizWrapper}>
          <h1>Answer the questions </h1>
          <ActiveQuiz answers={this.state.quiz[0].answers}/>
        </div>
      </div>
    );
  }
}

export default Quiz;
