import React from 'react';
import headerLogoPicture from '../image/header_logo.svg';
function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={headerLogoPicture} alt="Лого Место" />
        </header>)
}
export default Header;