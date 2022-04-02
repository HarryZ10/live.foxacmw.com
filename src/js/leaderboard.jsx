import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TeamOne from './gitlab/team_1';
import TeamTwo from './gitlab/team_2';
import TeamThree from './gitlab/team_3';
// import TeamFour from './gitlab/team_4';
import TeamFive from './gitlab/team_5';
import TeamSix from './gitlab/team_6';

export default function Leaderboard() {

    return (
        <div id="gitlab-leaderboard" className="section">
            <h1 id='title' style={padding}>Leaderboard</h1>
            <h3 id="subtitle" style={subtitle}>
                <span id="here">Here </span> shows random commmit messages and # of commits from each project and a modal that shows team information.
            </h3>

           {/* Make two columns side by side */}
            <Container fluid>
            <Row>
                <Col sm={6}>
                    <TeamOne/>
                </Col>
                <Col sm={6}>
                    <TeamTwo/>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <TeamThree/>
                </Col>
                {/* <Col sm={6}>
                    <TeamFour/>
                </Col> */}
                <Col sm={6}>
                    <TeamFive/>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <TeamSix/>
                </Col>
            </Row>
            </Container>
        </div>
    );
}

const padding = {
    padding: '0.2rem'
}

const subtitle = {
    padding: '0.9rem',
    paddingBottom: '4rem',
    fontSize: '0.9rem',
    fontWeight: '100',
    lineHeight: '2rem',
}