import React from 'react';

function Project({title, img, github, deployed}) {
    return (
        <div className="col s12 m6 hoverable">
            <div className="card">
                <div className="card-image">
                    <img src={img} alt=""/>
                    <span className="card-title">{title}</span>
                </div>
                <div className="card-action">
                    <a href={github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </div>
        </div>
    )

}

export default Project;