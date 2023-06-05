import React from 'react';

const NavBar = () => {
    return (
       <nav className='navbar'>
        <ul>
            <li className='navbar_item'>Mon espace</li>
            <li className='navbar_item'>Contact</li>
            <li className='navbar_item'>Mentions légales</li>
            <li className='navbar_item'>Se déconnecter</li>
        </ul>

       </nav>
    );
};

export default NavBar;