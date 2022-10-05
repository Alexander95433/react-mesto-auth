import React from 'react';

function AuthForm(props) {
    return (
        <form className='authorization__form' onSubmit={props.onSubmit} noValidate>
            <h1 className='authorization__title'>{props.onTitle}</h1>
            <fieldset className='authorization__fieldset'>
                <input className={`authorization__input ${props.onError.email ? 'popup__form-input_error' : ''}`} type='email' onChange={props.onHandleChange}
                    value={props.onValues.email || ''} name='email' placeholder='Email' required></input>
                <span className="popup__span-input-error add-a-card-title-error" hidden={props.onError.email && false}>{props.onError.email}</span>
                <input className={`authorization__input ${props.onError.password ? 'popup__form-input_error' : ''}`} type='text' onChange={props.onHandleChange}
                    value={props.onValues.password || ''} name='password' placeholder='Пароль' minLength="2" required></input>
                <span className="popup__span-input-error add-a-card-title-error" hidden={props.onError.password && false}>{props.onError.password}</span>
                <button type="submit" className='authorization__button' disabled={!props.onValid ? true : false}>{props.onButtonText}</button>
                {props.children}
            </fieldset>
        </form>
    )
}

export default AuthForm;