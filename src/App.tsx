import React from 'react';
import QuestionCard from './components/QuestionCard';

function App() {

  const startTrivia = () => {

  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  };

  const nextQuestion = () => {

  };

  return (
    <div className="App">
      <h2>The Quiz</h2>
      <button className="start" onClick={startTrivia}>Start</button>
      <p>Score: </p>
      <p>Loading Questions...</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
