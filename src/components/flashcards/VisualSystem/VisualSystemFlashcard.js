import React, { useState, useEffect } from 'react';
import LifeonEarthQuestions from './LifeonEarthQuestions.json';

const VisualSystemQuestions = [
    {
      "question": "When did the first life forms appear on Earth?",
      "answer": "3.8 to 4 billion years ago"
    },
    {
      "question": "What were the first life forms on Earth?",
      "answer": "Single celled organisms such as cyanobacteria"
    },
    {
      "question": "What does cyanobacteria release as a byproduct of photosynthesis?",
      "answer": "Oxygen"
    },
    {
      "question": "What is a species?",
      "answer": "A group of organisms with shared attributes"
    },
    {
      "question": "What is a prokaryotic cell?",
      "answer": "A type of cell found in single-celled organisms that has free-flowing DNA"
    },
    {
      "question": "What is a eukaryotic cell?",
      "answer": "A type of cell found in multi-celled organisms that has its DNA within a nucleus"
    },
    {
      "question": "What is natural selection?",
      "answer": "The process by which organisms with favorable traits are more likely to survive and reproduce"
    },
    {
      "question": "Who developed the concept of natural selection?",
      "answer": "Charles Darwin and Alfred Wallace"
    },
    {
      "question": "What is genetic drift?",
      "answer": "The process by which changes in the environment lead to changes in the life forms that inhabit it, eventually resulting in the formation of a new species"
    },
    {
      "question": "What percentage of all species that have lived on Earth have gone extinct?",
      "answer": "Over 99%"
    },
    {
      "question": "On average, how long does a species exist before going extinct?",
      "answer": "5-6 million years"
    }
  ]

const VisualSystemFlashcard = () => {
  // state
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  // When the component mounts, get a random question
  useEffect(() => {
    getRandomQuestion();
  }, []);

  // Get a random question from the questions array and set it as the current question
  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * VisualSystemQuestions.length);
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
    className="rounded-xl shadow-md overflow-hidden w-80">
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

export default VisualSystemFlashcard;