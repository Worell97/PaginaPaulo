import React from 'react';
import LogoImg from '../../assets/Logo-Amarelo.png';
import './toolBar.css';
import DrawerToggleButton from'../SideDrawer/ToogleButtom.js';
import { Link, useHistory } from 'react-router-dom';

const toolBar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_logo">
                <Link to="/">
                    <img src={LogoImg} alt="logo tipo"/>   
                </Link>
            </div>
            <div className="spacer"/>
            <div className="toolbar_navigation-items">
                <ul>
                    <li>                    
                        <Link to="/Empresa">
                            Empresa
                        </Link>      
                    </li>
                    <li>                    
                        <Link to="/Produtos">
                            Produtos
                        </Link>      
                    </li>
                    <li>                    
                        <Link to="Contato/New">
                            Contato
                        </Link>      
                    </li>
                </ul>
            </div>
            <div>
                <DrawerToggleButton click={props.toggleClickHandler}/>
            </div>
        </nav>
    </header>
);

export default toolBar;