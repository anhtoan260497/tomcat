import React from 'react';
import './styles.scss'

MiddleDescription.propTypes = {
    
};

function MiddleDescription(props) {
    return (
        <div id='middle' className='middle-description-container' data-aos="fade-up">
            <p>🐱 Inspired by the mischievous yet beloved Tom the cat, <span>TomWifHat</span> Token is here to bring laughter and fun to the crypto community!</p>

            <p>🎩 <span>#TomWifHat</span> - Get ready for the next big thing in the crypto world!</p>

            <p>Founder's Dedication: Our founder, <span>#CatWifHat</span>, recently raised 9,000 SOL (~$1,600,000) in a private session but refunded it all to everyone. That's the commitment to our community!</p>

            <p>Launch Pad Incoming: With more than enough data, we are gearing up to launch our own launchpad. See you at <span>#Binance!</span></p>

            <p className='stay-tune'>Stay tuned for more updates and join us on this exciting journey!</p>

            <p className='launch-time'>Launch Time : 14:00 UTC 10th May</p>
        </div>
    );
}

export default MiddleDescription;