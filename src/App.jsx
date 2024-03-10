import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiRecords, setBmiRecords] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);
    const heightInM = heightInCm / 100;
    const bmi = weightInKg / (heightInM * heightInM);

   
    let category;
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }

    
    const newRecord = {
      weight: weightInKg,
      height: heightInCm,
      bmi: bmi.toFixed(2),
      category,
    };
    setBmiRecords([...bmiRecords, newRecord]);

    
    setWeight('');
    setHeight('');
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="height">Height (cm):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate BMI</button>
      </form>
      {bmiRecords.length > 0 && (
        <div>
          <h2>BMI Records</h2>
          <table>
            <thead>
              <tr>
                <th>Weight (kg)</th>
                <th>Height (cm)</th>
                <th>BMI</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {bmiRecords.map((record, index) => (
                <tr key={index}>
                  <td>{record.weight}</td>
                  <td>{record.height}</td>
                  <td>{record.bmi}</td>
                  <td>{record.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;