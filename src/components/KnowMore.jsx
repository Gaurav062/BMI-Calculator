function KnowMore() {
  return (
    <div className="know-more">
      <h1>🧠 Know More About BMI</h1>

      <h2>✅ What is BMI?</h2>
      <p>
        BMI (Body Mass Index) is a simple calculation using a person's <strong>height and weight</strong>. It helps you understand whether you are underweight, normal, overweight, or obese.
      </p>
      <p><strong>Formula:</strong> BMI = weight (kg) / height² (m²)</p>

      <h2>📊 BMI Categories</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>BMI Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Underweight</td>
            <td>Less than 18.5</td>
          </tr>
          <tr>
            <td>Normal weight</td>
            <td>18.5 – 24.9</td>
          </tr>
          <tr>
            <td>Overweight</td>
            <td>25.0 – 29.9</td>
          </tr>
          <tr>
            <td>Obese (Class 1)</td>
            <td>30.0 – 34.9</td>
          </tr>
          <tr>
            <td>Obese (Class 2)</td>
            <td>35.0 – 39.9</td>
          </tr>
          <tr>
            <td>Extreme Obesity</td>
            <td>40.0 and above</td>
          </tr>
        </tbody>
      </table>

      <h2>⚠️ Why Is BMI Important?</h2>
      <ul>
        <li>It gives a quick snapshot of your overall health.</li>
        <li>Helps identify risk for diseases like heart disease, diabetes, and hypertension.</li>
        <li>It’s <strong>not</strong> a perfect measurement but is widely used.</li>
      </ul>

      <h2>💡 Keep in Mind</h2>
      <ul>
        <li>BMI is a <strong>starting point</strong>, not a diagnosis.</li>
        <li>Combine it with other factors like <strong>waist size, activity level, and diet</strong>.</li>
        <li>Consult with a healthcare provider for a full health assessment.</li>
      </ul>

      <h2>🎯 Tips to Maintain a Healthy BMI</h2>
      <ul>
        <li>🥗 Eat a balanced diet (less sugar & processed foods).</li>
        <li>🏃‍♂️ Stay active — aim for 30 minutes of physical activity daily.</li>
        <li>😴 Get enough sleep and manage stress.</li>
      </ul>

      <p>
        🎉 Want to calculate your BMI? <br />
        👉 <a href="/">Go to BMI Calculator</a>
      </p>
    </div>
  );
}

export default KnowMore;
