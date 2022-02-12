import React from 'react';


const timelineData = [
    {
        text: 'Welcome to the Code Jam!',
        date: 'April 1, 2022 at 5:00pm',
        category: {
			tag: 'canyon',
			color: '#FFDB14'
		},
        description: 'Hear more about what to expect at the Code Jam.',
    },
    {
        text: 'Git/Github Workshop',
        date: 'April 1, 2022 at 6:00pm',
        category: {
			tag: 'workshops',
			color: '#e17b77'
		},
        description: 'Learn how to use Git and Github to collaborate on projects and get feedback from your peers.',
        link: {
            url: '#',
            text: 'Check it out here'
        }
    },
    {
        text: 'Hosting Workshop',
        date: 'April 1, 2022 at 6:30pm',
        category: {
			tag: 'workshops',
			color: '#e17b77'
		},
        link: {
            url: '#',
            text: 'Check it out here'
        }
    },
    {
        text:
            'Minecraft Server Break',
        date: 'April 1, 2022 at 11:30pm',
        description: "Starting at 11:30pm until the end of Code Jam.",
        category: {
			tag: 'games',
			color: '#018f69'
		},
        link: {
            url:
                '#',
            text: '(1.8.X - 1.18.X) IP: codejam.minehut.gg'
        }
    },
    {
        text: 'Submission Deadline',
        date: 'April 03, 2022 at 1:00am',
        category: {
			tag: 'submissions',
			color: '#018f69'
		},
        link: {
            url: 'foxacmw.devpost.com',
            text: 'Submit your project here!'
        }
    },
    {
        text: 'Judging period begins',
        date: 'April 03, 2022 at 10:00am',
        category: {
            tag: 'judging',
            color: '#018f69'
        },
        description: 'Please hang tight, we are judging!',
        link: {
            url: '#',
            text: 'See the judging criteria'
        }
    },
    {
        text: 'Judging period ends',
        date: 'April 03, 2022 at 12:00pm',
        category: {
            tag: 'judging',
            color: '#018f69'
        }
    },
    {
        text: 'Free Lunch',
        date: 'April 03, 2022 at 1:30pm',
        category: {
            tag: 'canyon',
            color: '#FFDB14'
        },
        description: 'Free for all in the Canyon Commons private dining room.',
    },
    {
        text: 'Award Ceremony',
        date: 'April 03, 2022 at 4:00pm',
        category: {
            tag: 'canyon',
            color: '#FFDB14'
        },
        description: 'Held in the Canyon Commons private dining room.',
        link: {
            url: '#',
            text: 'Join us!'
        }
    }
]

const TimelineItem = ({ data }) => (
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
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
);

const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );


// export Timeline
export default Timeline