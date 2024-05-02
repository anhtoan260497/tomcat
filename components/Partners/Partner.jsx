import React from 'react';
import './styles.scss'

Partner.propTypes = {
    
};

function Partner(props) {

    const partners = [
        {name : 'Dextools', img : 'https://catwiftoken.org/wp-content/uploads/2024/03/Frame-1321325367.png'},
        {name : 'Dexview', img : 'https://catwiftoken.org/wp-content/uploads/2024/03/Frame-1321325368.png'},
        {name : 'Solscan', img : 'https://catwiftoken.org/wp-content/uploads/2024/03/Frame-1321325369.png'},
        {name : 'AveDex', img : 'https://catwiftoken.org/wp-content/uploads/2024/03/Frame-1321325370.png'},
        {name : 'DexScreener', img : 'https://catwiftoken.org/wp-content/uploads/2024/03/Frame-1321325371.png'},
        {name : 'Raydium', img : 'https://catwiftoken.org/wp-content/uploads/2024/03/Frame-1321325372.png'},
        {name : 'CMC', img : 'https://catwiftoken.org/wp-content/uploads/2024/03/Frame-1321325373.png'},
        {name : 'Coingecko', img : 'https://catwiftoken.org/wp-content/uploads/2024/03/Frame-1321325374.png'},
        {name : 'Pinksale', img : 'https://catwiftoken.org/wp-content/uploads/2024/03/Frame-1321325375.png'},
    ]

    const renderPartners = () => {
        return partners.map(item => {
            return <img src={item.img} alt={item.name} key={item.name}/>
        })
    }
    return (
        <div className='partner-container' data-aos="fade-up">
            <h3>OUR PARTNERS</h3>
            <div className='partners'>
                {renderPartners()}
            </div>
        </div>
    );
}

export default Partner;