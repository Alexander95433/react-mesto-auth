import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import headerLogoPicture from '../image/header_logo.svg';
function Header() {
    return (
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
                    <Link to="/sign-in" className="header__button-title">Выйти</Link>
                </Route>
            </Switch>

        </header>)
}
export default Header;