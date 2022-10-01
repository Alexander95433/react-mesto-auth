import React from "react";
import {Link} from 'react-router-dom';
import apiAuth from '../utils/ApiAuth'
import { useHistory } from 'react-router-dom';

function Register() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const history = useHistory();
    function handleChange(e) {
        if (e.target.name === 'email') {
            setEmail(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    };
 
    function handleSubmit(e) {
        e.preventDefault();
        debugger
        apiAuth.register({
            endpoint: 'signup',
            methodName: 'POST',
        }, email, password)
        .then((res) => {
            if (res) {
                history.push('/sign-in');
                console.log(res)}
             })
        .catch((err) => {console.log(`Ошибка регистрации: ${err}`)})
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