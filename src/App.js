import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
    <div 
    className="hero min-h-screen bg-base-200">
      <div 
      className="hero-content text-center">
        
        <div 
        className="max-w-md">
          <h1 
          className="text-5xl font-bold"
          >A comfortable place to learn about the brain</h1>

          <Link to='/explore'>
            <button 
            className="btn btn-primary mt-6"
            >Explore topics</button>
          </Link>
        </div>
      
      </div>
    </div>
    </>
  );
}

export default App;
