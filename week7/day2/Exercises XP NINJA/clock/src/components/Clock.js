import React, { useEffect, useState } from 'react';

function Clock() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID); // cleanup when component unmounts
    };
  }, []);

  const tick = () => {
    setCurrentDate(new Date());
  };

  return (
    <div style={{ textAlign: 'center', fontSize: '24px', marginTop: '100px' }}>
      <h1>Local Time</h1>
      <p>{currentDate.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;
