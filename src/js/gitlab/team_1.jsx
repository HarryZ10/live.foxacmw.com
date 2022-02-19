import React from 'react'
import useFetch from 'react-fetch-hook'
import Card from 'react-bootstrap/Card'
import { BallTriangle } from  'react-loader-spinner'


export default function TeamOne() {

    const { isLoading, error, data}  = useFetch(
        `https://gitlab.com/api/v4/projects/33664481/repository/commits`,
        {
            headers: {
                'Private-Token': process.env.REACT_APP_GITLAB_TOKEN
        }
    });

    if (isLoading) return <BallTriangle color="#96B3CC" height={20} width={20} />;
    if (error) return <p>404!</p>

    return (
        <div>
            <Card id="team-card" style={{ width: '80%', marginBottom: '2rem' }}>
            <Card.Body style={{ paddingTop: '1.2rem', paddingBottom: '1.2rem'}}>
                <Card.Title style={title}>Team 1</Card.Title>
                <Card.Subtitle style={subtitle} className="mb-2 text-muted"># of Commits: {data.length}</Card.Subtitle>
                <Card.Text style={subtitle}>
                {data === undefined ? <p style={warning}>No commits yet!</p> : <p>Commit: "{data && data[Math.floor(Math.random() * data.length)].message}"</p>}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
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