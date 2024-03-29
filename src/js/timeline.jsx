import React from 'react';

const timelineData = [
    // {
    //     text: 'Doors open!',
    //     date: 'Friday at 4pm',
    //     category: {
    //         tag: 'EHS 102',
    //         color: '#4764f6'
    //     },
    //     description: 'Get excited and hyped for the Code Jam launch!',
    // },
    // {
    //     text: 'Code Jam Kickoff',
    //     date: 'Friday at 4pm',
    //     category: {
    //         tag: 'EHS 102',
    //         color: '#4764f6'
    //     },
    //     description: 'Hear more about what to expect and learn for the Code Jam.',
    // },
    // {
    //     text: 'Mentor x Team Networking',
    //     date: 'Friday at 4:30pm',
    //     category: {
    //         tag: 'EHS Atrium',
    //         color: '#00520c'
    //     },
    //     description: 'Bring on the team morale!',
    // },
    // {
    //     text: 'Workshop: Introduction to Hosting',
    //     date: 'Friday at 4:45pm (15 minutes)',
    //     category: {
    //         tag: 'EHS 102',
    //         color: '#00520c'
    //     }
    // },
    // {
    //     text: 'Hacking begins!',
    //     date: 'Friday at 5pm',
    //     category: {
    //         tag: 'code jam',
    //         color: '#e17b77'
    //     },
    //     link: {
    //         url: '#',
    //         text: 'Team Check-In Form (by 9pm PT)'
    //     }
    // },
    // {
    //     text: 'Twilight ACM-W Office Hours',
    //     date: 'TBA',
    //     category: {
    //         tag: 'help desk',
    //         color: '#545ecc'
    //     }
    // },
    //     {
    //     text: 'ACM-W Office Hours',
    //     date: 'TBA',
    //     category: {
    //         tag: 'help desk',
    //         color: '#545ecc'
    //     },
    // },
    {
        text: 'Hacking Ends!',
        date: 'Sunday at 12:00am',
        category: {
            tag: 'submissions',
            color: '#6a3e87'
        },
        description: 'Submit all code to your respective Gitlab repository.'
    },
    {
        text: 'Presentation Submission Deadline',
        date: 'Sunday at 11:00am',
        category: {
            tag: 'submissions',
            color: '#6a3e87'
        },
        link: {
            url: 'https://codejam-2023.devpost.com/',
            text: 'Submit a formal presentation to Devpost'
        }
    },
    {
        text: 'Celebratory Banquet',
        date: 'Sunday at 11:30am',
        category: {
            tag: 'EHS Atrium',
            color: '#4764f6'
        }
    },
    {
        text: 'Computer Science Alum Panel',
        date: 'Sunday at 1-1:45pm',
        category: {
            tag: 'EHS 102',
            color: '#4764f6'
        },
        description: 'Come meet all the working alumni & mentors, and other hackers that have helped put this on for you all!',
    },
    {
        text: '3rd Annual Code Jam Showcase',
        date: 'Sunday at 2pm (until 3:10pm)',
        category: {
            tag: 'EHS 102',
            color: '#4764f6'
        },
    },
    {
        text: 'Networking Break (ft. Green Tea and Lemonade)',
        date: 'Sunday at 3:30pm',
        category: {
            tag: 'EHS Atrium',
            color: '#4764f6'
        },
    },
    {
        text: '3rd Annual Award Ceremony',
        date: 'Sunday at 4pm',
        description: 'Come see who wins the coveted ACM-W Code Jam awards, and invite your friends to come see the showcase!',
        category: {
            tag: 'EHS 102',
            color: '#4764f6'
        },
    }
]


function TimelineItem (data) {

    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag" style={{ background: data.category.color }}>
                    {data.category.tag}
                </span>
                <time>{data.date}</time>
                <p>{data.text}</p>
                {data.description && (
                    <p>{data.description}</p>
                )}
                {data.link && !data.link.func && (
                    
                    <a
                        href={data.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {data.link.text}
                    </a>
                )}

                {/* make an alert to screen */}

                {/* {data.link && data.link.func && (
                    <a
                        onClick={() => { navigator.clipboard.writeText('codejam.minehut.gg')
                        alert(`Copied ${data.link.text} to clipboard successfully!`) 
                        
                    }}
                    >
                        {data.link.text}
                    </a> 
                )} */}
                <span className="circle" />
            </div>
        </div>
    );
}

const Timeline = () => 
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem { ...data } idx={idx} />
            ))}
        </div>
    );

    


// export Timeline
export default Timeline