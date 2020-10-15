import React, {Component} from 'react';
import styles from './Quiz.module.css';
import ActiveQuiz from './../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz.';


class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
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
    const results = this.state.results;

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success';
      }
      this.setState ({
        answerState: {[answerId]: 'success'},
        results,
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
      results[question.id] = 'error';
      this.setState ({
        answerState: {[answerId]: 'error'},
        results,
      });
    }
  };

  isQuizFinished () {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  onRetryHandler = () => {
    this.setState ({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {},
    });
  };

  render () {
    return (
      <div className={styles.quiz}>
        <div className={styles.quizWrapper}>
          <h1>
            {this.state.isFinished ? 'finished' : 'answer the questions'}
          </h1>

          {this.state.isFinished
            ? <FinishedQuiz
                results={this.state.results}
                quiz={this.state.quiz}
                onRetry={this.onRetryHandler}
              />
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
