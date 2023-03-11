import React from 'react';
import useFetch from 'react-fetch-hook'
import { BallTriangle } from 'react-loader-spinner';

const AllCommits = () => {

    // keeps track of page count using a hook
    const [page, setPage] = React.useState(1);

    // this is the maximum number of items per page
    const ITEMS_PER_PAGE = 500;

    // all of the projects we want to fetch commits from
    const PROJECTS = [
        {id: 1, endpoint: 'https://gitlab.com/api/v4/projects/43694584/repository/commits'},
        {id: 2, endpoint: 'https://gitlab.com/api/v4/projects/43694592/repository/commits'},
        {id: 3, endpoint: 'https://gitlab.com/api/v4/projects/43694601/repository/commits'},
        {id: 4, endpoint: 'https://gitlab.com/api/v4/projects/43694611/repository/commits'},
        {id: 5, endpoint: 'https://gitlab.com/api/v4/projects/43694618/repository/commits'},
    ];

    // fetches commits from all projects asynchronously
    const fetchCommits = async () => {

        // map over all projects and fetch commits
        const requests = PROJECTS.map(async project => {

            // appends the page number and items per page to the endpoint
            const response = await fetch(`${project.endpoint}?ref_name=main&all=true&per_page=500&page=${page}`, {
                headers: {
                    'Private-Token': import.meta.env.VITE_GITLAB_TOKEN,
                },
            });
            const data = await response.json();
            return ({ id: project.id, data });
        });
        
        // waits for all requests to finish
        const responses = await Promise.all(requests);

        // returns the responses
        return responses;
    };

    // data is the response from the fetchCommits function
    const { isLoading, error, data } = useFetch(fetchCommits);

    // for every 100 items fetched, increment page count
    React.useEffect(() => {
        if (data && data.length === 100) {
            setPage(page + 1);
        }
    }, [data])


    // if the data is loading, show a loading spinner
    if (isLoading) {
        return <><BallTriangle color="#96B3CC" height={20} width={20} /></>;
        }
    else if (error) {
        return <p>404!</p>
    }
    else {
        // return an array of all commits
        return (
            <>
            {data.map((project) => (
                <div key={project.id}>
                <h2>Project {project.id}</h2>
                <ul>
                    {project.data.map((commit) => (
                    <li key={commit.id}>
                        <p>{commit.title}</p>
                        <p>{commit.author_name}</p>
                        <p>{commit.created_at}</p>
                    </li>
                    ))}
                </ul>
                </div>
            ))}
            </>
        );
    }
}

export default AllCommits;
