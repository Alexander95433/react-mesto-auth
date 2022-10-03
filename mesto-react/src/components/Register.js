import React from "react";
import { Link } from 'react-router-dom';


function Register(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    function handleChange(e) {
        if (e.target.name === 'email') {
            setEmail(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        props.onRegister({
            endpoint: 'signup',
            methodName: 'POST',
            body: { password, email }
        })
    }

    return (
        <form className='authorization__form' onSubmit={handleSubmit}>
            <h1 className='authorization__title'>Регистрация</h1>
            <fieldset className='authorization__fieldset'>
                <input className='authorization__input' onChange={handleChange} name='email' placeholder='Email'></input>
                <input className='authorization__input' onChange={handleChange} name='password' placeholder='Пароль'></input>
                <button type="submit" className='authorization__button' >Зарегистрироваться</button>
                <Link className="authorization__registration-link" to='/sign-in'> Уже зарегистрированы? Войти</Link>
            </fieldset>
        </form>
    )
}

export default Register;