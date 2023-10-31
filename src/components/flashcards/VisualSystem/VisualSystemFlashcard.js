import React, { useState, useEffect } from 'react';

const VisualSystemQuestions = [
  {
    "question": "What are the two streams of the visual system?",
    "answer": "Dorsal and Ventral"
  },
  {
    "question": "How do mantis shrimp perceive a wider spectrum of light?",
    "answer": "Their eyes contain more types of photoreceptors"
  },
  {
    "question": "What are the two main types of photoreceptors in the human eye?",
    "answer": "Rods and cones"
  },
  {
    "question": "What is myopia?",
    "answer": "Nearsightedness, causing a blurry image of distant objects"
  },
  {
    "question": "What is the \"relay station\" of the visual system?",
    "answer": "Lateral Geniculate Nuclei"
  },
  {
    "question": "What is the role of V4 in the visual cortex?",
    "answer": "Primarily color processing"
  },
  {
    "question": "What are the steps involved in color perception?",
    "answer": "Detection, Discrimination, and Appearance"
  },
  {
    "question": "What is achromatopsia?",
    "answer": "A condition leading to the loss of color vision"
  },
  {
    "question": "What is the Fusiform Face Area responsible for?",
    "answer": "Recognition of faces"
  },
  {
    "question": "What is pareidolia?",
    "answer": "A phenomenon where we perceive a face where there is no actual face"
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
    const randomQuestion = VisualSystemQuestions[randomIndex];
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
    className="rounded-xl bg-slate-100 shadow-md overflow-hidden w-80">
      <div 
      className="px-6 py-4 my-6 text-center">
        <h2 
        className="font-bold text-xl mb-2"
        >Test Yourself</h2>

        <div 
        className="px-6 py-4">
          {/* If there is a current question, render either the question or the answer based on the showAnswer state */}
          {currentQuestion ? (
            <div>
              <div 
              className="font-regular text-medium mb-2">
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
          <div
          className='flex flex-col'>
            <button 
            className="btn btn-primary" 
            onClick={toggleAnswer}>
              {showAnswer ? 'Go back' : 'Show Answer'}
            </button>

            <button 
            className="btn btn-neutral mt-2" 
            onClick={refreshQuestion}
            >New question</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VisualSystemFlashcard;