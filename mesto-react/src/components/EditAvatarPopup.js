import React from "react";
import PopupWithForm from './PopupWithForm';
import useFormAndValidation from "./hooks/useFormAndValidation";

function EditAvatarPopup(props) {
    const { values, handleChange, errors, isValid, setValues, resetForm } = useFormAndValidation()

    // очистит поля ввода при изменение  props.isOpen
    React.useEffect(() => {
        resetForm()
        setValues('')
    }, [props.isOpen]);

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            link: values.link
        });
    }

    return (
        <PopupWithForm name={'popup-update-avatar'} title={'Обновить аватар'} isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} onError={isValid}>
            <input onChange={handleChange} value={values.link || ''}
                className={`popup__form-input popup__form-input_name-add-a-card ${errors.link ? 'popup__form-input_error' : ''}`}
                id="update-avatar-link" type="url" name="link" placeholder="Ссылка на картинку" required />
            <span className="popup__span-input-error update-avatar-link-error" hidden={errors.link && false}>{errors.link}</span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup