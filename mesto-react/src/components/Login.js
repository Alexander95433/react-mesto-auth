import React from 'react';
import {Link} from 'react-router-dom';

function Login() {

    return (
        <form className='authorization__form'>
            <h1 className='authorization__title'>Вход</h1>
            <fieldset className='authorization__fieldset'>
                <input className='authorization__input' placeholder='Email'></input>
                <input className='authorization__input' placeholder='Пароль'></input>
                <button className='authorization__button'>Войти</button>
            </fieldset>
        </form>
    )
}

export default Login;