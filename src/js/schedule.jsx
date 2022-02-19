import React from 'react';
import Timeline from './timeline.jsx'
import '../sass/timeline.scss';

function Schedule() {
  return (
    <div id="schedule" className="section">
      <h1 id="title" style={title}>Schedule</h1>
      <div className="schedule-embed-wrapper">
        <Timeline />
      </div>
    </div>
  );
}

const title = {
  paddingTop: '3rem',
  paddingBottom: '3rem',
}

export default Schedule;