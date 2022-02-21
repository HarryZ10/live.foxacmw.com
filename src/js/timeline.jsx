import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";


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
        text: 'Hosting Workshop',
        date: 'April 1, 2022 at 6:15pm',
        category: {
			tag: 'workshops',
			color: '#e17b77'
		},
        link: {
            text: 'TBA/Discord Classroom'
        }
    },
    {
        text:
            'Minecraft Server Running!',
        date: 'April 1, 2022 at 11:30pm',
        description: "Server is Live at 11:30pm",
        category: {
			tag: 'games',
			color: '#018f69'
		},
        link: {
            text: 'codejam.minehut.gg',
            func: 'navigator.clipboard.writeText(this.state.textToCopy)'
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
            url: 'https://foxacmw.devpost.com',
            text: 'Submit a formal presentation to Devpost'
        }
    },
    {
        text: 'Judging period begins',
        date: 'April 03, 2022 at 2:00pm',
        category: {
            tag: 'judging',
            color: '#018f69'
        },
        description: 'Please hang tight, we are judging!',
    },
    {
        text: 'Judging period ends',
        date: 'April 03, 2022 at 3:00pm',
        category: {
            tag: 'judging',
            color: '#018f69'
        }
    },
    {
        text: 'Celebratory Dinner',
        date: 'April 03, 2022 at 4:30pm',
        category: {
            tag: 'canyon',
            color: '#FFDB14'
        },
        description: 'Free for all in the Canyon Commons private dining room.',
    },
    {
        text: 'Award Ceremony',
        date: 'April 03, 2022 at 6:00pm',
        category: {
            tag: 'canyon',
            color: '#FFDB14'
        },
        description: 'Held in the Canyon Commons private dining room.',
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
                        onClick={() => { navigator.clipboard.writeText(data.link.text)
                        alert(`Copied ${data.link.text} to clipboard`) 
                        
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