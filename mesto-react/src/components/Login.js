import React from 'react';
import useFormAndValidation from "./hooks/useFormAndValidation";
function Login(props) {
    const { values, handleChange, errors, isValid, setValues, resetForm } = useFormAndValidation()

    React.useEffect(() => {
        resetForm()
    }, []);

    function handleSubmitt(e) {
        e.preventDefault();
        const { password, email } = values
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
        <form className='authorization__form' onSubmit={handleSubmitt} noValidate>
            <h1 className='authorization__title'>Вход</h1>
            <fieldset className='authorization__fieldset'>
                <input className={`authorization__input ${errors.email ? 'popup__form-input_error' : ''}`} type='email' onChange={handleChange}
                    value={values.email || ''} name='email' placeholder='Email' required></input>
                <span className="popup__span-input-error add-a-card-title-error" hidden={errors.email && false}>{errors.email}</span>
                <input className={`authorization__input ${errors.password ? 'popup__form-input_error' : ''}`} type='text' onChange={handleChange}
                    value={values.password || ''} name='password' placeholder='Пароль' minLength="2" required></input>
                <span className="popup__span-input-error add-a-card-title-error" hidden={errors.password && false}>{errors.password}</span>
                <button type='submit' className='authorization__button' disabled={!isValid && true}>Войти</button>
            </fieldset>
        </form>
    )
}

export default Login;