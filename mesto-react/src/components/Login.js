import React from 'react';
import apiAuth from '../utils/ApiAuth'
import { useHistory } from 'react-router-dom';
function Login() {
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

    function handleSubmitt(e) {
        e.preventDefault();
        debugger
        apiAuth.authorization({
            endpoint: 'signin',
            methodName: 'POST',
        }, email, password)
        .then((res) => {
            if (res) {
                history.push('/');
                console.log(res)}
             })
        .catch((err) => {console.log(`Ошибка входа в систему: ${err}`)})
    }
    return (
        <form className='authorization__form' onSubmit={handleSubmitt}>
            <h1 className='authorization__title'>Вход</h1>
            <fieldset className='authorization__fieldset'>
                <input className='authorization__input' onChange={handleChange} name='email' placeholder='Email'></input>
                <input className='authorization__input' onChange={handleChange} name='password' placeholder='Пароль'></input>
                <button type='submit' className='authorization__button'>Войти</button>
            </fieldset>
        </form>
    )
}

export default Login;