import React from 'react';
import './styles.scss'
import { Button, Progress } from 'flowbite-react';
import { copyClipboard } from '../../utils';

Tokenomics.propTypes = {

};

function Tokenomics(props) {

    const tokenomics = [
        { name: 'Burn 8%', progress: 45, color: 'red', colorText: '#E02424' },
        { name: 'Liquidty 26.5%', progress: 26.5, color: 'green', colorText: '#057A55' },
        { name: 'Liquidity MEXC 3.5%', progress: 3.5, color: 'indigo', colorText: '#5850EC' },
        { name: 'MM CEX 2%', progress: 2, color: 'yellow', colorText: '#E3A008' },
        { name: 'Presale', progress: 60, color: 'pink', colorText: '#E74694' },
    ]

    const contractAddress = 'Avb1PBRudW7uUV9MqTUqfZ3EZTDvNkKS63W3wyPseudf'

    const swapingDex = [{
        name: "solscan",
        img: "https://catwiftoken.org/wp-content/uploads/2024/03/Solscan-Explained-1.png",
    },
    {
        name: "dextools",
        img: "https://catwiftoken.org/wp-content/uploads/2024/03/Frame-1321325399.png",
    },
    {
        name: "raydium",
        img: "https://catwiftoken.org/wp-content/uploads/2024/03/Frame-1321325400.png",
    },
];

    const renderTokenomics = () => {
        return tokenomics.map(item => {
            return (
                <div className='tokenomics-progress-item' key={item.name}>
                    <p style={{ color: `${item.colorText}` }}>{item.name}</p>
                    <Progress progress={item.progress} color={item.color} />
                </div>
            )
        })
    }

    const renderSwapDex = () => {
        return swapingDex.map(item => {
           return <img src={item.img} alt={item.name} key={item.name}/>
        })
    }

    return (
        <div id='tokenomics' className='tokenomics-container'>
            <h3>TOKENOMICS</h3>
            <div className='tokenomics-progress'>
                {renderTokenomics()}

                <div className='tokenomics-progress-contract'>
                    <h2>Contract Address</h2>
                    <p onClick={() => copyClipboard(contractAddress)}>{contractAddress}</p>
                </div>

                <div className='tokenomics-swap'>
                   {renderSwapDex()}
                </div>

            </div>
        </div>
    );
}

export default Tokenomics;