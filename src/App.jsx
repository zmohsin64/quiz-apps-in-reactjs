import React, { useState } from "react";
import "./App.css";

function App() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "How many numbers of elements a valid react component can return?",
      options: [
        {
          id: 0,
          text: "1",
          isCorrect: true,
        },
        {
          id: 1,
          text: "2",
          isCorrect: false,
        },
        {
          id: 2,
          text: "3",
          isCorrect: false,
        },
        { id: 3, text: "4", isCorrect: false},
      ],
    },
    {
      text: "Which of the following command is used to install create-react-app?",
      options: [
        { id: 0, text: "npm install -g create-react-app", isCorrect: true },
        { id: 1, text: "npm install create-react-app", isCorrect: false },
        { id: 2, text: "npm install -f create-react-app", isCorrect: false },
        { id: 3, text: "install -g create-react-app", isCorrect: false },
      ],
    },
    {
      text: "What of the following is used in React.js to increase performance?",
      options: [
        { id: 0, text: "Original DOM", isCorrect: false },
        { id: 1, text: "Virtual DOM", isCorrect: true },
        { id: 2, text: "Both A and B.", isCorrect: false },
        { id: 3, text: "None of the above.", isCorrect: false },
      ],
    },
    {
      text: "Which of the following acts as the input of a class-based component?",
      options: [
        { id: 0, text: "Class", isCorrect: false },
        { id: 1, text: "Factory", isCorrect: false },
        { id: 2, text: "Render", isCorrect: false },
        { id: 3, text: "Props", isCorrect: true },
      ],
    },
    {
      text: "What would be the output of the following example?",
      options: [
        { id: 0, text: "Hello World 1", isCorrect: false },
        { id: 1, text: "Hello World 2", isCorrect: false },
        { id: 2, text: "Hello World 1 Hello World 2", isCorrect: false },
        { id: 3, text: "Error", isCorrect: true },
      ],
    },
    {
      text: "What is the declarative way to render a dynamic list of components based on values in an array?",
      options: [
        { id: 0, text: "Using the reduce array method", isCorrect: false },
        { id: 1, text: "Using the <Each /> component", isCorrect: false },
        { id: 2, text: "With a for/while loop", isCorrect: false },
        { id: 3, text: "Using the Array.map() method", isCorrect: true },
      ],
    },
    {
      text: "What is a state in React?",
      options: [
        { id: 0, text: "A permanent storage", isCorrect: false },
        { id: 1, text: "External storage of the component", isCorrect: false },
        { id: 2, text: "Internal storage of the component", isCorrect: true },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "In which of the following directory React.js components are saved?",
      options: [
        { id: 0, text: "Inside the js/components/", isCorrect: true },
        { id: 1, text: "Inside the vendor/components/", isCorrect: false },
        { id: 2, text: "Inside the external/components/", isCorrect: false },
        { id: 3, text: "Inside the vendor/", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is used to pass data to a component from outside in React.js?",
      options: [
        { id: 0, text: "SetState", isCorrect: false },
        { id: 1, text: "Render with arguments", isCorrect: false },
        { id: 2, text: "Props", isCorrect: true },
        { id: 3, text: "PropTypes", isCorrect: false },
      ],
    },
    {
      text: "What is the use of the create-react-app command in the React.js application?",
      options: [
        { id: 0, text: "It is used to update a React app", isCorrect: false },
        { id: 1, text: "It is used to create a new React app", isCorrect: true },
        { id: 2, text: "It is used to install dependencies", isCorrect: false },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  }

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  }

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <h2>Current Score: {score}</h2>
      {showFinalResults ? (
        <div className="final-result">
          <h1>Final Results</h1>
          <h2>{score} out of {questions.length} correct = ({(score/questions.length) * 100}%)</h2>
          <button onClick={() => restartGame()}> Restart App</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>
            Question {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="title-quiz">{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
