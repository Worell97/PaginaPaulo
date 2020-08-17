import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    return(
        <nav className={drawerClasses}>
            <ul className="menu">
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
        </nav>
    );
};


export default sideDrawer;