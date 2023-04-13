import React from "react";
import { FaAngleRight } from "react-icons/fa";
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
          className="text-5xl font-bold leading-tight"
          >A comfortable place to learn about the brain</h1>
          <p 
          className="py-6"
          >Minimal ads, no paywalls, no user accounts</p>

          <Link to="/explore">
            <button 
            className="btn btn-primary"
            ><FaAngleRight /> Explore topics </button>
          </Link>
        </div>

      </div>
    </div>

    </>
  );
}

export default App;
