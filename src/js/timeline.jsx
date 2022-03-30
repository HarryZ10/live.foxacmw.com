import React from 'react';

const timelineData = [
    {
        text: 'Doors open!',
        date: 'April 1, 2022 at 4:15pm',
        category: {
            tag: 'EHS 102',
            color: '#FFDB14'
        },
        description: 'Get excited and hyped for the Code Jam launch!',
    },
    {
        text: 'Code Jam Kickoff',
        date: 'April 1, 2022 at 4:30pm (30 minutes)',
        category: {
            tag: 'EHS 102',
            color: '#FFDB14'
        },
        description: 'Hear more about what to expect and learn for the Code Jam.',
    },
    {
        text: 'Team Building Activity',
        date: 'April 1, 2022 at 5:00pm (20 minutes)',
        category: {
            tag: 'EHS 102',
            color: '#FFDB14'
        },
        description: 'Bring on team morale!',
    },
    {
        text: 'Workshop: Introduction to Hosting',
        date: 'April 1, 2022 at 5:30pm (30 minutes)',
        category: {
            tag: 'EHS 102',
            color: '#FFDB14'
        }
    },
    {
        text: 'Hacking starts now!',
        date: 'April 1, 2022 at 6:00pm',
        category: {
            tag: 'code jam',
            color: '#e17b77'
        },
        link: {
            url: '#',
            text: 'Team Check-In Form (required)'
        }
    },
    {
        text: 'Optional Entertainment: Lip Sync Competition 2022',
        date: 'April 1, 2022 at 7-9pm',
        category: {
            tag: 'entertainment',
            color: '#018f69'
        },
        link: {
            text: 'Bauman Auditorium'
        }
    },
    {
        text: 'Late Night Help Desk Hours',
        date: 'April 1, 2022 at 9:15pm (3 hours)',
        category: {
            tag: 'help desk',
            color: '#545ecc'
        },
        link: {
            text: 'Discord'
        }
    },
    {
        text: 'Minecraft Server Running!',
        date: 'April 1, 2022 at 11:00pm',
        category: {
            tag: 'entertainment',
            color: '#018f69'
        },
        link: {
            text: 'codejam.minehut.gg',
            func: true
        }
    },
    {
        text: 'Twilight Help Desk Hour (limited)',
        date: 'April 2, 2022 at 2:00am (3 hours)',
        category: {
            tag: 'help desk',
            color: '#545ecc'
        },
        link: {
            text: 'Discord/team location'
        }
    },
    {
        text: 'Open Help Desk Hours',
        date: 'April 2, 2022 at 7:00am (until 6pm)',
        category: {
            tag: 'help desk',
            color: '#545ecc'
        },
        link: {
            text: 'Discord/team location'
        }
    },
    {
        text: 'Open Help Desk Hours',
        date: 'April 2, 2022 at 9:30pm (until 2am)',
        category: {
            tag: 'help desk',
            color: '#545ecc'
        },
        link: {
            text: 'Discord/team location'
        }
    },
    {
        text: 'Hacking Ends... Code Submission Deadline',
        date: 'April 03, 2022 at 1:15am',
        category: {
            tag: 'submissions',
            color: '#6a3e87'
        },
        description: 'Submit all code to your respective Gitlab repository.'
    },
    {
        text: 'Presentation Submission Deadline',
        date: 'April 03, 2022 at 8:00am',
        category: {
            tag: 'submissions',
            color: '#6a3e87'
        },
        link: {
            url: 'https://foxacmw.devpost.com',
            text: 'Submit a formal presentation to Devpost'
        }
    },
    {
        text: 'Celebratory Brunch',
        date: 'April 03, 2022 at 12:00pm',
        category: {
            tag: 'EHS 102',
            color: '#FFDB14'
        }
    },
    {
        text: 'Networking Event',
        date: 'April 03, 2022 at 1:00pm',
        category: {
            tag: 'EHS 102',
            color: '#FFDB14'
        },
        description: 'Come meet all the working alumni & mentors, and other hackers that have helped put this on for you all!',
    },
    {
        text: 'Annual Code Jam Showcase 2022',
        date: 'April 03, 2022 at 2pm (45 minutes)',
        category: {
            tag: 'EHS 102',
            color: '#FFDB14'
        },
    },
    {
        text: 'Award Ceremony & Team Awards',
        date: 'April 03, 2022 at 4:00pm (50 minutes)',
        category: {
            tag: 'EHS 102',
            color: '#FFDB14'
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

                {data.link && data.link.func && (
                    <a
                        onClick={() => { navigator.clipboard.writeText('codejam.minehut.gg')
                        alert(`Copied ${data.link.text} to clipboard successfully!`) 
                        
                    }}
                    >
                        {data.link.text}
                    </a> 
                )}
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