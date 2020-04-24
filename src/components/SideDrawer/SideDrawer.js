import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    return(
        <nav className={drawerClasses}>
            <ul className="menu">
                <li>                    
                    <a href="/Empresa" className="menuItems" >
                        Empresa
                    </a>      
                </li>
                <li>                    
                    <a href="/Produtos" className="menuItems">
                        Produtos
                    </a>      
                </li>
                <li>                    
                    <a href="Contato/New" className="menuItems">
                        Contato
                    </a>      
                </li>
            </ul>
        </nav>
    );
};


export default sideDrawer;