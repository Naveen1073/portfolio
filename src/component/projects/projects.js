import React from 'react';
import Rental from '../images/Rental-car.png';
import './project.css';
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";

function MyProject() {

    const list = [
        {
            id: 0,
            img: Rental,
            heading: "Rental Car",
            content: "The Rental Car Website is a static platform crafted with HTML, CSS, and Bootstrap. It simplifies car rental by providing users with a direct interface to explore options and book reservations efficiently.",
            tools: ['Html', 'CSS','Bootstrap'],
            git: "https://github.com/Naveen1073/Rental-car-Website.git",
            live: "https://rentalcar-web.netlify.app"
        },
        {
            id: 1,
            img: Rental,
            heading: "Rental Car",
            content: "The Rental Car Website is a static platform crafted with HTML, CSS, and Bootstrap. It simplifies car rental by providing users with a direct interface to explore options and book reservations efficiently.",
            tools: ['Html', 'CSS','Bootstrap'],
            git: "https://github.com/Naveen1073/Rental-car-Website.git",
            live: "https://rentalcar-web.netlify.app"
        },
        {
            id: 2,
            img: Rental,
            heading: "Rental Car",
            content: "The Rental Car Website is a static platform crafted with HTML, CSS, and Bootstrap. It simplifies car rental by providing users with a direct interface to explore options and book reservations efficiently.",
            tools: ['Html', 'CSS','Bootstrap'],
            git: "https://github.com/Naveen1073/Rental-car-Website.git",
            live: "https://rentalcar-web.netlify.app"
        },

    ];

    return (
        <div className='container1' id='projects'>
            <h1 className='project' >Project</h1>
            <ul>
                {list.map((lists, index) => (
                    <li key={lists.id} className='project-content'>
                        {(index % 2 === 0) ? (
                            <div className='straight'>
                                <div className='img-div'>
                                    <img className='project-img' src={lists.img} />
                                </div>
                                <div className='description-div'>
                                    <h3 className='project-heading'>{lists.heading}</h3>
                                    <p className='project-summary'>{lists.content}</p>
        
                                    <div className='project-tools'>
                                        {lists.tools.map((tool) => (
                                            <h4>{tool}</h4>
                                        ))}
                                    </div>
                                    <div className='project-tools'>
                                        <a href={lists.git} target='_blank'><button>Code<FaGithub className='FaGithub'/></button></a>
                                        <a href={lists.live} target='_blank'><button>Live Demo <RiShareBoxLine className='FaGithub'/> </button></a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className='reverse'>
                                <div className='description-div'>
                                    <h3 className='project-heading'>{lists.heading}</h3>
                                    <p className='project-summary'>{lists.content}</p>
        
                                    <div className='project-tools'>
                                        {lists.tools.map((tool) => (
                                            <h4>{tool}</h4>
                                        ))}
                                    </div>
                                    <div className='project-tools'>
                                        <a href={lists.git} target='_blank'><button>Code<FaGithub className='FaGithub'/></button></a>
                                        <a href={lists.live} target='_blank'><button>Live Demo <RiShareBoxLine className='FaGithub'/> </button></a>
                                    </div>
                                </div>
                                <div className='img-div'>
                                    <img className='project-img' src={lists.img} />
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default MyProject;
