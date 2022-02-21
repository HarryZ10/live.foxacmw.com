import React from 'react'
import useFetch from 'react-fetch-hook'
import Card from 'react-bootstrap/Card'
import { BallTriangle } from  'react-loader-spinner'
import TeamModal from '../teamModal'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import {LinkedIn} from '../content.json';
import Button from 'react-bootstrap/Button';



export default function TeamOne() {

    var content = [];
    var team4 = LinkedIn.team4;

    for (var i = 0; i < team4.length; i++) {
        content.push(TeamInfo(team4[i].name, team4[i].url))
    }


    const modalRef = React.useRef();

    const { isLoading, error, data}  = useFetch(
        `https://gitlab.com/api/v4/projects/33664487/repository/commits`,
        {
            headers: {
                'Private-Token': process.env.REACT_APP_GITLAB_TOKEN
        }
    });

    if (isLoading) return <BallTriangle color="#96B3CC" height={20} width={20} />;

    if (error) return <p>404!</p>

    return (
        <div>

            <TeamModal ref={modalRef}>
                <div className="grid">
                    <div className="whole-modal">
                    </div>

                    <div className="title-modal">
                        <h1 id="modal-title">Team 4</h1>
                    </div>

                    <div className="content-in-modal">
                        <p>
                        {content}
                        </p>
                    </div>

                    <div className="footer-modal">

                        <p>
                        <p>
                                <span style={{
                                fontFamily: 'ThirstyScriptExtraBold',
                                fontSize: '1.5rem',
                                color: '#96B3CC' 
                                }}>{data.length} commits</span>
                            </p>
                            <p>
                                {/* scroll box */}
                                <div id="scrollbox">
                                    <SimpleBar style={{ maxHeight: 200, paddingTop: 10, paddingBottom: 10 }}>
                                        {data.map(commit => (
                                            <li key={commit.id}>
                                                <a href={commit.web_url} target="_blank" rel="noopener noreferrer">
                                                    "{commit.message}"
                                                </a>
                                            </li>
                                        ))}
                                    </SimpleBar>
                                </div>
                            </p>
                        </p>
                    </div>
                </div>

            </TeamModal>
            <Card id="team-card" style={{ width: '80%', marginBottom: '2rem' }}>
            <Card.Body onClick={() => modalRef.current.open()} style={{ paddingTop: '1.2rem', paddingBottom: '1.2rem'}}>
                <Card.Title style={title}>Team 4</Card.Title>
                <Card.Subtitle style={subtitle} className="mb-2 text-muted"># of Commits: {data.length}</Card.Subtitle>
                <Card.Text style={subtitle}>
                    {data === undefined ? <p style={warning}>No commits yet!</p> : <p>Commit: "{data && data[Math.floor(Math.random() * data.length)].message}"</p>}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

function TeamInfo(name, link) {

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Button
                variant="primary"
                className="button-team"
            >
                {name}
            </Button>
        </a>
    );

}

const title = {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    paddingBottom: '0.5rem',
}

const subtitle = { 
    fontSize: '0.9rem',
    fontWeight: '100',
}

const warning = {
    fontSize: '0.9rem',
    fontWeight: '100',
    color: 'red',
}