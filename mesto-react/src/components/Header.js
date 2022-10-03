import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import headerLogoPicture from '../image/header_logo.svg';
import closeIcon from '../image/Close_Icon_popup.png';
import onButtonBurgerPicture from '../image/on-buttonBurger.png';

function Header(props) {
    return (
        <>
            <div className='header__burger-wrapper'>
                <div className='header__burger'>
                    <p className='header__email'>{props.onEmail}  </p>
                    <Link to="/sign-in" className="header__button-title header__button-title-burger" onClick={props.onClickExit}>Выйти</Link>
                </div>
            </div>
            <header className="header">
                <img className="header__logo" src={headerLogoPicture} alt="Лого Место" />
                <Switch>
                    <Route path={'/sign-up'}>
                        <Link to="/sign-in" className="header__button-title">Войти</Link>
                    </Route>

                    <Route path={'/sign-in'}>
                        <Link to="/sign-up" className="header__button-title">Регистрация</Link>
                    </Route>

                    <Route exact path={'/'}>
                        <button className='header__close-button' onClick={props.onBurger}>
                            <img className='header__close-button-picture' src={props.onCloseButton ? onButtonBurgerPicture : closeIcon}></img>
                        </button>
                        <div className='header__link-box'>
                            <div className='header__link-box'>
                                <div className='header__link-box'>
                                    <p className='header__email'>{props.onEmail} </p>
                                    <Link to="/sign-in" className="header__button-title" onClick={props.onClickExit}>Выйти</Link>
                                </div>
                            </div>
                        </div>
                    </Route>
                </Switch>

            </header>
        </>
    )
}
export default Header;