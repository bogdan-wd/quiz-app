import React, {Component} from 'react';
import styles from './Quiz.module.css';
import ActiveQuiz from './../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    quiz: [
      {
        question: 'how are you',
        rightAnswerId: 2,
        id: 1,
        answers: [
          {
            text: 'fine',
            id: 1,
          },
          {
            text: 'bad',
            id: 2,
          },
          {
            text: 'nice',
            id: 3,
          },
          {
            text: 'sad',
            id: 4,
          },
        ],
      },
      {
        question: 'how are you',
        rightAnswerId: 1,
        id: 2,
        answers: [
          {
            text: 'one',
            id: 1,
          },
          {
            text: 'two',
            id: 2,
          },
          {
            text: 'three',
            id: 3,
          },
          {
            text: 'four',
            id: 4,
          },
        ],
      },
    ],
  };

  onAnswerClickHandler = answerId => {
      this.setState({
          activeQuestion: this.state.activeQuestion +1
      })
  };

  render () {
    return (
      <div className={styles.quiz}>
        <div className={styles.quizWrapper}>
          <h1>Answer the questions </h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
