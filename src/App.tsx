import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { FETCH_QUESTIONS } from './API';
import { Difficulty, QuestionState } from './API';

type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

function App() {
	const TOTAL_QUESTIONS = 10;

	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	console.log(questions);

	const startTrivia = async () => {
		setLoading(true);
		setGameOver(false);

		const newQuestions = await FETCH_QUESTIONS(TOTAL_QUESTIONS, Difficulty.EASY);
		setQuestions(newQuestions);
		setScore(0);
		setUserAnswers([]);
		setNumber(0);
		setLoading(false);
		//Add error handling
	};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

	const nextQuestion = () => {};

	return (
		<div className="App">
			<h2>The Quiz</h2>
			{gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
				<button className="start" onClick={startTrivia}>
					Start
				</button>
			) : null}
			{!gameOver && <p>Score: </p>}
			{loading && <p>Loading Questions...</p>}
			{!loading && !gameOver && (
				<QuestionCard
					questionNr={number + 1}
					question={questions[number].question}
					answers={questions[number].answers}
					callback={checkAnswer}
					userAnswer={userAnswers ? userAnswers[number] : undefined}
					totalQuestions={TOTAL_QUESTIONS}
				/>
			)}
			{!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
				<button className="next" onClick={nextQuestion}>
					Next Question
				</button>
			) : null}
		</div>
	);
}

export default App;
