import React from 'react';

const Vote = ({ languages, handleVote }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1><strong>Vote Your Language!</strong></h1>
      {languages.map((lang, index) => (
        <div key={index} style={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#ffe4c4',
          padding: '10px 30px',
          margin: '10px auto',
          maxWidth: '400px',
          border: '1px solid #333'
        }}>
          <span>{lang.votes}</span>
          <span>{lang.name}</span>
          <span
            onClick={() => handleVote(index)}
            style={{ color: 'green', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Click Here
          </span>
        </div>
      ))}
    </div>
  );
};

export default Vote;
