import React from 'react';

function BMIRecordTable({ bmiRecords }) {
  return (
    <div>
      <h2>BMI Records</h2>
      <table>
        <thead>
          <tr>
            <th>Weight (kg)</th>
            <th>Height (cm)</th>
            <th>BMI</th>
          </tr>
        </thead>
        <tbody>
          {bmiRecords.map((record, index) => (
            <tr key={index}>
              <td>{record.weight}</td>
              <td>{record.height}</td>
              <td>{record.bmi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BMIRecordTable;
