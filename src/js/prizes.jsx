import React from 'react';

export default function Prizes() {
  return (
    <div id="prizes" className="section">
      <h1 id="title" style={title}>Prizes</h1>

      <div className="chart">
        <div className="bar bar-1">
          <div className="bar-label">1st Place</div>
        </div>
        <div className="bar bar-2">
          <div className="bar-label">2nd Place</div>
        </div>
        <div className="bar bar-3">
          <div className="bar-label">3rd Place</div>
        </div>
      </div>

    </div>
  );
}

const title = {
  paddingTop: '3rem',
  paddingBottom: '3rem',
}
