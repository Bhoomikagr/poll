// PollResultsChart.jsx
import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import './app.css'
const PollResultsChart = ({ votes }) => {
  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Narendra Modi', 'Rahul Gandhi', 'Rahul Gandhi A', 'Others'],
        datasets: [{
          label: 'Poll Results',
          data: votes,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    return () => myChart.destroy();
  }, [votes]);

  return (
    <div className="poll-resultbox">
      <canvas id="myChart" style={{ width: '100%', maxWidth: '700px' }}></canvas>
    </div>
  );
};

export default PollResultsChart;
