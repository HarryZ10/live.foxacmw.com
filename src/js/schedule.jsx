import React from 'react';
import { VueWrapper } from 'vuera'
import Timeline from './timeline.jsx'
import '../sass/timeline.scss';

function Schedule() {
  return (
    <div id="schedule" className="section">
      <h2 id="title" style={title}>Schedule</h2>
      <div className="schedule-embed-wrapper">
        <Timeline />
      </div>
    </div>
  );
}

const title = {
  paddingTop: '2rem',
}

export default Schedule;
