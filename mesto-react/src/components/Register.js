import React from "react";
import { Link } from 'react-router-dom';
import useFormAndValidation from "./hooks/useFormAndValidation";
import AuthForm from './AuthForm';

function Register(props) {
    const { values, handleChange, errors, isValid, setValues, resetForm } = useFormAndValidation()

    React.useEffect(() => {
        resetForm()
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        const { password, email } = values
        debugger
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
        <AuthForm onSubmit={handleSubmit} onTitle={'Регистрация'} onButtonText={'Зарегистрироваться'} onError={errors} onHandleChange={handleChange} onValues={values} onValid={isValid} onResetForm={() => { resetForm() }}>
            <Link className="authorization__registration-link" to='/sign-in'> Уже зарегистрированы? Войти</Link>
        </AuthForm>

    )
}

export default Register;
