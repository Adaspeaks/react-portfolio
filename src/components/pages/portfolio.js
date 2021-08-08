import React from "react";
import Project from "./project";
import "../css/portfolio.css";

const projects = [
    {
        title: "InTents",
        img: "img/card1.jpg",
        github: "https://github.com/ZacharyWK/i-n-t-e-n-t-s",
        id: 1,
    },
    {
        title: "Chicken Boolean",
        img: "img/card2.jpg",
        github: "https://github.com/Adaspeaks/Chicken-Boolean",
        id: 2,
    },
    {
        title: "phoenixSky",
        img: " img/card3.jpg",
        github: "https://github.com/stongems/PhoenixSky",
        id: 3,
    },
    {
        title: "E-Commerce-Backend",
        img: "img/card4.jpg",
        github: "https://github.com/Adaspeaks/E-Commerce-Backend",
        id: 4,
    },
    {
        title: "progressiveBudget",
        img: "img/card5.jpg",
        github: "https://github.com/Adaspeaks/progressiveBudgetTracker",
        id: 5,
    },
    {
        title: "workout Tracker",
        img: "img/card6.jpg",
        github: "https://github.com/Adaspeaks/workoutTracker",
        id: 6,
    },
    {
        title: "TechBlog",
        img: "img/card7.jpg",
        github: "https://github.com/Adaspeaks/techBlog",
        id: 7,
    },
    {
        title: "Regex-Tutorial",
        img: "img/card8.jpg",
        github: "https://gist.github.com/Adaspeaks/69b51e0a617682c9c924bb28419dee93",
        id: 8,
    },
]

function Portfolio() {
    return(
        <div className="row">
            {projects.map((project) => 
            <Project 
            {...project}
            key={project.id} />)}
            
        </div>
    )
}

export default Portfolio