import React, { useState } from "react";
import Results from "./Results";

function Calc() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [showResults, setShowResults] = useState(false);

  function handlechangeHeight(event) {
    setHeight(event.target.value);
    setShowResults(false);
  }
  
  function handlechangeWeight(event) {
    setWeight(event.target.value);
    setShowResults(false);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    if (!height || !weight) {
      alert("Please enter both weight and height.");
      return;
    }
    setShowResults(true);
  }

  return (
    <div className="container">
      <h1 className="calc-title">BMI Calculator</h1>
      <div className="calc-content">
        <p className="calc-text">
          Enter your weight and height to calculate your BMI.
        </p>
        <form className="bmi-form" onSubmit={handleSubmit}>
          <label className="calc-label" htmlFor="weight">
            Weight (kg):
          </label>
          <input
            onChange={handlechangeWeight}
            value={weight}
            type="number"
            id="weight"
            name="weight"
            className="calc-input"
            required
          />

          <label className="calc-label" htmlFor="height">
            Height (m):
          </label>
          <input
            onChange={handlechangeHeight}
            value={height}
            type="number"
            id="height"
            name="height"
            className="calc-input"
            required
          />

          <button type="submit" className="calc-button">
            Calculate BMI
          </button>
        </form>
      </div>
      
      {showResults && height && weight && (
        <Results
          bmi={(weight / (height * height)).toFixed(2)}
          category={
            weight / (height * height) < 18.5
              ? "Underweight"
              : weight / (height * height) < 24.9
              ? "Normal weight"
              : weight / (height * height) < 29.9
              ? "Overweight"
              : "Obese"
          }
          description={
            weight / (height * height) < 18.5
              ? "You are underweight. Consider consulting a healthcare provider."
              : weight / (height * height) < 24.9
              ? "You have a normal weight. Keep up the good work!"
              : weight / (height * height) < 29.9
              ? "You are overweight. Consider lifestyle changes."
              : "You are obese. It's important to consult a healthcare provider."
          }
        />
      )}
    </div>
  );
}

export default Calc;
