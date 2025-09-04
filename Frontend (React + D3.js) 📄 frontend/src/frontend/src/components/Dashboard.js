import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [anomalies, setAnomalies] = useState([]);
  const [sentiment, setSentiment] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/anomalies').then(res => setAnomalies(res.data));
    axios.get('http://localhost:8000/api/sentiment').then(res => setSentiment(res.data));
  }, []);

  return (
    <div>
      <h2>Anomalies</h2>
      <ul>
        {anomalies.map((item, idx) => (
          <li key={idx}>{item.date}: Price={item.price}, Volume={item.volume}</li>
        ))}
      </ul>

      <h2>Sentiment</h2>
      <ul>
        {sentiment.map((item, idx) => (
          <li key={idx}>{item.post} → Score: {item.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
