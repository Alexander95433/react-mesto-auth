import React from "react";
import { Link, withRouter} from 'react-router-dom';

function Register() {

    return (
        <form className='authorization__form'>
            <h1 className='authorization__title'>Регистрация</h1>
            <fieldset className='authorization__fieldset'>
                <input className='authorization__input' placeholder='Email'></input>
                <input className='authorization__input' placeholder='Пароль'></input>
                <button className='authorization__button'>Зарегистрироваться</button>
                <Link className="authorization__registration-link" to='/sign-in'> Уже зарегистрированы? Войти</Link>
            </fieldset>
        </form>
    )
}

export default Register;