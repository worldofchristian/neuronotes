import React, { useState, useEffect } from 'react';
import LifeonEarthQuestions from './LifeonEarthQuestions.json';

const TestYourselfLifeonEarth = () => {
  // State
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  // When the component mounts, get a random question
  useEffect(() => {
    getRandomQuestion();
  }, []);

  // Get a random question from the questions array and set it as the current question
  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * LifeonEarthQuestions.length);
    const randomQuestion = LifeonEarthQuestions[randomIndex];
    setCurrentQuestion(randomQuestion);
    setShowAnswer(false);
  };

  // Toggle between answer and question
  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  // Get a new random question
  const refreshQuestion = () => {
    getRandomQuestion();
  };

  return (
    <div 
    className="rounded-xl shadow-lg overflow-hidden w-80">
      <div 
      className="px-6 py-4 my-6 text-center">
        <h2 
        className="font-bold text-3xl mb-2"
        >Test Yourself</h2>

        <div 
        className="px-6 py-4">
          {/* If there is a current question, render either the question or the answer based on the showAnswer state */}
          {currentQuestion ? (
            <div>
              <div 
              className="font-regular text-lg mb-2">
                {showAnswer ? currentQuestion.answer : currentQuestion.question}
              </div>
            </div>
          ) : (
            // If there is no current question, render a loading message
            <p
            >Loading question...</p>
          )}
        </div>

        <div 
        className="flex items-center justify-center gap-4">
          <button 
          className="btn btn-primary" 
          onClick={toggleAnswer}>
            {showAnswer ? 'Show Question' : 'Show Answer'}
          </button>

          <button 
          className="text-4xl" 
          onClick={refreshQuestion}>
            {/*refresh icon*/}
            &#x21bb;
          </button>
        </div>

      </div>
    </div>
  );
};

export default TestYourselfLifeonEarth;

