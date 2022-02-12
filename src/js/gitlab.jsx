import React from 'react';
import useFetch from 'react-fetch-hook';
import '../sass/gitlab.scss';

export default function Gitlab() {

    const MAIN_REPO_ID = "14399753";
    const PROJECT_IDS_LIST = ["33664481", "33664484", "33664485", "33664487", "33664488"]
    
    const { isLoading, error, data }  = useFetch(
        `https://gitlab.com/api/v4/groups/${MAIN_REPO_ID}/projects`,
        {
            headers: {
                'Private-Token': process.env.REACT_APP_GITLAB_TOKEN
        }
    });
    
    const { isLoading: isLoading1, error: err1, data: commitData_team1}  = useFetch(
        `https://gitlab.com/api/v4/projects/${PROJECT_IDS_LIST[0]}/repository/commits`,
        {
            headers: {
                'Private-Token': process.env.REACT_APP_GITLAB_TOKEN
        }
    });

    const { isLoading: isLoading2, error: err2, data: commitData_team2}  = useFetch(
        `https://gitlab.com/api/v4/projects/${PROJECT_IDS_LIST[1]}/repository/commits`,
        {
            headers: {
                'Private-Token': process.env.REACT_APP_GITLAB_TOKEN
        }
    });


    const { isLoading: isLoading3, error: err3, data: commitData_team3}  = useFetch(
        `https://gitlab.com/api/v4/projects/${PROJECT_IDS_LIST[2]}/repository/commits`,
        {
            headers: {
                'Private-Token': process.env.REACT_APP_GITLAB_TOKEN
        }
    });


    const {isLoading: isLoading4, error: err4, data: commitData_team4}  = useFetch(
        `https://gitlab.com/api/v4/projects/${PROJECT_IDS_LIST[3]}/repository/commits`,
        {
            headers: {
                'Private-Token': process.env.REACT_APP_GITLAB_TOKEN
        }
    });

    const {isLoading: isLoading5, error: err5, data: commitData_team5}  = useFetch(
        `https://gitlab.com/api/v4/projects/${PROJECT_IDS_LIST[4]}/repository/commits`,
        {
            headers: {
                'Private-Token': process.env.REACT_APP_GITLAB_TOKEN
        }
    });

    
    
    

    if (isLoading || isLoading1 || isLoading2 || isLoading3 || isLoading4 || isLoading5)
        return <p>Loading...</p>;
    if (error || err1 || err2 || err3 || err4 || err5) return <p>Error :(</p>;

    return (
        <div id="gitlab-leaderboard" className="section">
            <h2 id="title" style={title}>Leaderboard</h2>
            {data.map(project => (
                <div key={project.id}>
                    <h3>
                        {project.name}:
                        
                        <ul>
                            {project.name === "Team1" ? commitData_team1.length
                                : project.name === "Team2" ? commitData_team2.length
                                : project.name === "Team3" ? commitData_team3.length
                                : project.name === "Team4" ? commitData_team4.length
                                : project.name === "Team5" ? commitData_team5.length
                                : null}
                        </ul>
                    
                    </h3>
                </div>

            ))}
        </div>
    );
}

const title = {
    padding: '2rem'
}