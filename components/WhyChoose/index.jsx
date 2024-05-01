import React from 'react';
import './styles.scss'

WhyChoose.propTypes = {

};

function WhyChoose(props) {
    return (
        <div className='why-choose-container'>
            <h3>WHY CHOOSE TOMWIFHAT?</h3>
            <div className='why-choose'>
                <div className='why-choose-text'>
                    <p><span>Community!: </span>
                        TomWifHat is a community-driven token, the community will determine the development of TomWifHat throughout the development process.</p>
                    <p><span>Put a Hat on the Cat!: </span>
                    TomWifHat, put a hat on the cat? Don’t say you don’t find it funny, why try putting a hat on your cat and sharing it with the community?</p>
                    <p><span>Dogs & Cats War: </span>
                         Dogs are dominating memecoin, TomWifHat will be the first cat to conquer and be at the top of the memecoin leaderboard! A war has broken out, do you want to participate?</p>
                </div>
                <img src='https://i.ibb.co/w6nJF5F/tom1.jpg' alt='tom2' />
            </div>
        </div>
    );
}

export default WhyChoose;