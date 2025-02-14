import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Userlog = () => {
  const [checkoutLogs, setCheckoutLogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedLogs = JSON.parse(localStorage.getItem('checkoutLogs')) || [];

    const normalizedLogs = storedLogs.map(log => ({
      id: log.Id || log.id,
      date: log.Date || log.date,
      time: log.Time || log.time,
    }));

    setCheckoutLogs(normalizedLogs);
  }, []);

  const groupedLogs = checkoutLogs.reduce((acc, log) => {
    if (!acc[log.time]) {
      acc[log.time] = [];
    }
    acc[log.time].push(log);
    return acc;
  }, {});

  return (
    <div>
      <h1>User Checkout Log</h1>
      <button onClick={() => navigate('/api')}>Go back</button>
      {checkoutLogs.length === 0 ? (
        <p>No checkout logs available.</p>
      ) : (
        <div>
          {(() => {
            let index = 0; // to keep track of receipt numbers
            const logElements = [];
            for (const time in groupedLogs) {
              index++;
              logElements.push(
                <div
                  key={index}
                  style={{
                    border: '1px solid black',
                    marginBottom: '10px',
                    padding: '10px',
                    backgroundColor: '#f8e071',
                  }}
                >
                  <h2>BOOK CHECKOUT</h2>
                  <h3>Receipt #{index}</h3>
                  <p><strong>Time:</strong> {time}</p>
                  <p><strong>Date:</strong> {groupedLogs[time][0].date}</p>
                  <p>BOOK ID : </p>
                  <hr />
                  {groupedLogs[time].map((log, logIndex) => (
                    <div key={logIndex}>
                      <p>
                        <strong>ID:</strong> {log.id || 'N/A'} <br />
                       
                      </p>
                    </div>
                  ))}
                </div>
              );
            }
            return logElements;
          })()}
        </div>
      )}
    </div>
  );
};
