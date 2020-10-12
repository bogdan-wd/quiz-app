import React, {Component} from 'react';
import styles from './Quiz.module.css';
import ActiveQuiz from './../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/ActiveQuiz/FinishedQuiz/FinishedQuiz.';

class Quiz extends Component {
  state = {
    isFinished: true,
    activeQuestion: 0,
    answerState: null, // {[id]: 'success' 'error'}
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
    if (this.state.answerState) {
      const key = Object.keys (this.state.answerState)[0];
      if (this.state.answerState[key] === 'success') {
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      this.setState ({
        answerState: {[answerId]: 'success'},
      });

      const timeOut = window.setTimeout (() => {
        if (this.isQuizFinished ()) {
          this.setState ({
            isFinished: true,
          });
        } else {
          this.setState ({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }
        window.clearTimeout (timeOut);
      }, 1000);
    } else {
      this.setState ({
        answerState: {[answerId]: 'error'},
      });
    }
  };

  isQuizFinished () {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render () {
    return (
      <div className={styles.quiz}>
        <div className={styles.quizWrapper}>
          <h1>
            {this.state.isFinished ? 'finished' : 'answer the questions'}
          </h1>

          {this.state.isFinished
            ? <FinishedQuiz/>
            : <ActiveQuiz
                answers={this.state.quiz[this.state.activeQuestion].answers}
                question={this.state.quiz[this.state.activeQuestion].question}
                onAnswerClick={this.onAnswerClickHandler}
                quizLength={this.state.quiz.length}
                answerNumber={this.state.activeQuestion + 1}
                state={this.state.answerState}
              />}

        </div>
      </div>
    );
  }
}

export default Quiz;
