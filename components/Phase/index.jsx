import React from 'react';
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

Phase.propTypes = {
    
};

function Phase(props) {

    const phases = [{
        titleImg: "https://catwiftoken.org/wp-content/uploads/2024/03/Group-1321325406.png",
        details: [
            " Launching CatWifHat Website & Community",
            " Presale On Pinksale",
            " Launch On Raydium",
            " Launch Marketing",
        ],
    },
    {
        titleImg: "https://catwiftoken.org/wp-content/uploads/2024/03/Group-1321325408.png",
        details: [" Listing CMC & CGK", " #CatWifHat Trending Global", " Listing of CEXs"],
    },
    {
        titleImg: "https://catwiftoken.org/wp-content/uploads/2024/03/Group-1321325411.png",
        details: [
            " CatWifHat Real-life events",
            " Listing T1 CEXs",
            " Enter the top memecoin leaderboard",
        ],
    },
];

const renderPhases = () => {
    return phases.map((item,index) => {
        return (
            <div className='phase-item' key={item.titleImg}>
                        <p className='phase-title'>Phase {index + 1}</p>
                        <FontAwesomeIcon className='phase-icon-desktop' icon={faChevronCircleRight} />
                        <FontAwesomeIcon className='phase-icon-mobile' icon={faChevronCircleDown} />
                        <ul className='phase-details'>
                           {item.details.map((childItem) => <li key={childItem}>{childItem}</li>)}
                        </ul>
                   </div>
        )
    })
}


    return (
        <div id='roadmap' data-aos="fade-up" className='why-choose-container'>
            <h3>PHASE</h3>
            <div className='why-choose phase-container'> 
            <img src='https://i.ibb.co/d2gDJZf/tom2.jpg' alt='tom3' />
                <div className='why-choose-text phase'> 
                   {renderPhases()}
                </div>
               
            </div>
        </div>
    );
}

export default Phase;