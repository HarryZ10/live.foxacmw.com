import React from 'react';
import LineGraph from 'react-line-graph';
import Commits from './gitlab/allcommits';

function GitlabGraph() {

    const commits = Commits()

    // just map the message to data
    const data = commits.map(commit => commit.message)

    return (
        <div>
            <LineGraph data={data}/>
        </div>
    )


}


export default GitlabGraph;