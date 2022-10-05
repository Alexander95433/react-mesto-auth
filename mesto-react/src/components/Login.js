import React from 'react';
import useFormAndValidation from "./hooks/useFormAndValidation";
import AuthForm from './AuthForm';

function Login(props) {
    const { values, handleChange, errors, isValid, setValues, resetForm } = useFormAndValidation()
    React.useEffect(() => {
        resetForm()
    }, []);

    function handleSubmit(e) {
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
        <AuthForm onSubmit={handleSubmit} onTitle={'Вход'} onButtonText={'Войти'} onError={errors} onHandleChange={handleChange} onValues={values} onValid={isValid} onResetForm={resetForm} />
    )
}

export default Login;
