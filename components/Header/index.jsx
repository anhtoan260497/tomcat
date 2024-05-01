import React, { useState } from "react"
import './styles.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

const Header = () => {

    const [isActiveMobileHeader, setIsActiveMobileHeader] = useState(false)
    
    const menu = [
        { name: "Home", path: "#" },
        { name: "Tokenomics", path: "#tokenomics" },
        { name: "Roadmap", path: "#roadmap" },
        { name: "Partners", path: "#partner" },
        { name: "Whitepaper", path: "#whitepaper" },
    ];

    const renderMenu = () => {
        return menu.map(item => (<a key={item.name} className="header-item" href={`${item.path}`}>{item.name}</a>))
    }

    return (
        <div className="header-container-fluid">
            <div className="header-container">
                <img className="xl:w-1/12 w-2/12" src="https://i.ibb.co/LCQNTJ1/icon.png" alt="catwifhat" />
                <div className="header-menu flex justify-between items-center">
                    {renderMenu()}
                    <div >
                        <a className="header-button">Join TomWifHat</a>
                    </div>
                </div>

                <button className="header-mobile-button" onClick={() => setIsActiveMobileHeader(true)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>

               {<div className={clsx('header-mobile-menu', isActiveMobileHeader && 'header-mobile-menu-active')}>
                        <button className="header-mobile-menu-close">
                            <FontAwesomeIcon icon={faXmark} onClick={()=>setIsActiveMobileHeader(false)} />
                        </button>
                      {renderMenu()}
                        <a className="header-button">Join CatWifHat</a>
                    </div >}
            </div>
        </div>
    )
}

export default Header