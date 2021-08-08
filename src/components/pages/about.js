import React from 'react';

function About() {
    return (
        <div className="container aboutMe">
            <div className="row">
                <div className="col m6 s12">
                    <img src="images/profile-pic.jpg" className="responsive-img" alt=""/>
                </div>
                <div className="col m6 s12">
                    <p className="flow-text">Hello everyone. My name is Johnny Brown and I am currently a student of the Trilogy fullstack Coding Bootcamp through the University of Arizona .</p>
                    <p className="flow-text">To be frank having a portfolio for myself is a weird concept as I've allways considered myself relatively talentless. At the time of writing this I'm not much older than 24 years old. </p>
                    <p className="flow-text"> But honestly what going through the fullstack bootcamp taught me is that I'm more adaptable than I originally gave myself credit for.</p>
                    <p className="flow-text">"Coding" this enigmatic concept all started to just seem more logical and I learned that I had a basic affinity for writing it.</p>
                    <p className="flow-text">In these 3 months I learned all the way from basic HTML and JavaScript all the way to being able to write an entire MERN stack application from scratch.</p>
                    <p className="flow-text">I'll be keeping this portfolio up to date as my carreer progress. Thank you for giving me the time of day and looking it over!</p>
                </div>
            </div>
        </div>
    )
}

export default About;