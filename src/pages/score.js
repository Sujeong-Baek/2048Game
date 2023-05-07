import React from 'react';

export default function Score({ score }) {
    return (
        <div className="score-container">
          <div className="score-label">SCORE</div>
          <div className="score-value">{score}</div>
        </div> 
    );
}
