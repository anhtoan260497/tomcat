import React from 'react';
import './styles.scss'

TopPage.propTypes = {

};

function TopPage(props) {
    return (
        <div data-aos="fade-up" className="top-container-fluid">
            <div className='top-container'>
                <img src='https://i.ibb.co/t27B2By/tom3.jpg' alt='tom-cat' />
                <div className='top-flex'>
                    <p>Welcome to TOMWIFHAT</p>
                    <div className='top-button'>
                        <button>Join Us</button>
                        <button>Learn More</button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default TopPage;