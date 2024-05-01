import React from 'react';
import './styles.scss'

Footer.propTypes = {

};

function Footer(props) {

    const socials = [
        { name: 'Twitter', path: 'https://twitter.com/catwiftoken', img: 'https://catwiftoken.org/wp-content/uploads/2024/03/Button.png' },
        { name: 'Telegram', path: 'https://t.me/cat_wif', img: 'https://catwiftoken.org/wp-content/uploads/2024/03/Button-1.png' },
        { name: 'Youtube', path: 'https://www.youtube.com/channel/UCXUW0Hk0W9dY9TnB6uY0yXg', img: 'https://catwiftoken.org/wp-content/uploads/2024/03/Button-2.png' },
        { name: 'Tiktok', path: 'https://www.tiktok.com/@catwiftoken', img: 'https://catwiftoken.org/wp-content/uploads/2024/03/Group-41.png' },
    ]

    const renderSocials = () => {
        return socials.map(item => (<a key={item.name} href={item.path}><img src={item.img} alt={item.name} /></a>))
    }

    return (
        <> <div className='footer-container-fluid'>
            <div className='footer-container'>
                <img className="footer-image" src='https://i.ibb.co/LCQNTJ1/icon.png' alt='icon' />
                <p>contact@tomwiftoken.net</p>
                <div className='footer-social'>
                    {renderSocials()}
                </div>
            </div>
        </div>
            <div className='footer-border'></div>
            <p className='copyright'>Copyright © 2022 TomWifHat</p>
        </>

    );
}

export default Footer;