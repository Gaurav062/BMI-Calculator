function Results({ bmi, category, description }) {
  return (
    <div className="results">
      <h2>Your BMI Results</h2>
      <div className="result-content">
        <p className="bmi-value">BMI: <strong>{bmi}</strong></p>
        <p className="bmi-category">Category: <strong>{category}</strong></p>
        <p className="bmi-description">{description}</p>
      </div>
    </div>
  );
}

export default Results;