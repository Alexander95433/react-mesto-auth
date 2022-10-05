import React from "react";
import { Link } from 'react-router-dom';
import useFormAndValidation from "./hooks/useFormAndValidation";

function Register(props) {
    const { values, handleChange, errors, isValid, setValues, resetForm } = useFormAndValidation()

    React.useEffect(() => {
        resetForm()
    },[]);

    function handleSubmit(e) {
        e.preventDefault();
        
        const { password, email } = values
        if (!values.email || !values.password) {
            return;
        }
        props.onRegister({
            endpoint: 'signup',
            methodName: 'POST',
            body: { password, email }
        })
    }

    return (
        
        <form className='authorization__form' onSubmit={handleSubmit} noValidate>
            <h1 className='authorization__title'>Регистрация</h1>
            <fieldset className='authorization__fieldset'>
                <input className={`authorization__input ${errors.email ? 'popup__form-input_error' : ''}`} type='email' onChange={handleChange}
                   value={values.email || ''} name='email' placeholder='Email' required></input>
                <span className="popup__span-input-error add-a-card-title-error" hidden={errors.email && false}>{errors.email}</span>
                <input className={`authorization__input ${errors.password ? 'popup__form-input_error' : ''}`} type='text' onChange={handleChange}
                   value={values.password || ''} name='password' placeholder='Пароль' minLength="2" required></input>
                <span className="popup__span-input-error add-a-card-title-error" hidden={errors.password && false}>{errors.password}</span>
                <button type="submit" className='authorization__button' disabled={!isValid ? true : false}>Зарегистрироваться</button>
                <Link className="authorization__registration-link" to='/sign-in'> Уже зарегистрированы? Войти</Link>
            </fieldset>
        </form>
        
    )
}

export default Register;