import React from 'react';

function Login(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    function handleChange(e) {
        if (e.target.name === 'email') {
            setEmail(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    };

    function handleSubmitt(e) {
        e.preventDefault();
        if (!email || !password) {
            return
        }
        props.onAuthorization({
            endpoint: 'signin',
            methodName: 'POST',
            body: { password, email }
        })
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