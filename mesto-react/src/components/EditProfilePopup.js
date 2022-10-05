import React from 'react';
import PopupWithForm from './PopupWithForm'
import { CurrentUserContext } from '../components/context/CurrentUserContext'
import useFormAndValidation from "./hooks/useFormAndValidation";

function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext)
    const { values, handleChange, errors, isValid, setValues, resetForm, } = useFormAndValidation()

    // обновит поля ввода с использованием данный из urrentUser при изменение props.isOpen
    React.useEffect(() => {
        resetForm()
        setValues(currentUser)

    }, [currentUser, props.isOpen])

    // обработчик submit для формы
    function handleSubmit(e) {
        e.preventDefault()
        props.onUpdateUser({
            name: values.name,
            about: values.about,
        });
    }

    return (
        <PopupWithForm name={'popup-edit-profile'} title={'Редактировать профиль'} isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} onError={isValid}>
            <input onChange={handleChange} value={values.name || ''}
                className={`popup__form-input popup__form-input_name-add-a-card ${errors.name ? 'popup__form-input_error' : ''}`} id="edit-profile-name"
                type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" required />
            <span className="popup__span-input-error edit-profile-name-error" hidden={errors.name && false}>{errors.name}</span>
            <input onChange={handleChange} value={values.about || ''}
                className={`popup__form-input popup__form-input_name-add-a-card ${errors.about ? 'popup__form-input_error' : ''}`}
                id="edit-profile-description" type="text" name="about" placeholder="О себе"
                minLength="2" maxLength="200" required />
            <span className="popup__span-input-error edit-profile-description-error" hidden={errors.about && false}>{errors.about}</span>
        </PopupWithForm>)
}
export default EditProfilePopup