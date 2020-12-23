import React, { useState } from 'react';
//import QuestionCard from './components/QuestionCard';
import {FETCH_QUESTIONS} from './API';
import {Difficulty} from './API';

function App() {
	const TOTAL_QUESTIONS = 10;

	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);
	const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  
  console.log(FETCH_QUESTIONS(TOTAL_QUESTIONS, Difficulty.EASY))

	const startTrivia = async () => {};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

	const nextQuestion = () => {};

	return (
		<div className="App">
			<h2>The Quiz</h2>
			<button className="start" onClick={startTrivia}>
				Start
			</button>
			<p>Score: </p>
			<p>Loading Questions...</p>
			{/*<QuestionCard
				questionNr={number + 1}
				question={questions[number].question}
				answers={questions[number].answers}
				callback={checkAnswer}
				userAnswer={userAnswers ? userAnswers[number] : undefined}
				totalQuestions={TOTAL_QUESTIONS}
      />*/}
			<button className="next" onClick={nextQuestion}>
				Next Question
			</button>
		</div>
	);
}

export default App;
