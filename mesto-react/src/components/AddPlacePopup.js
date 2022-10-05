import React from "react";
import PopupWithForm from './PopupWithForm'
import useFormAndValidation from "./hooks/useFormAndValidation";

function AddPlacePopup(props) {
    const { values, handleChange, errors, isValid, setValues, resetForm } = useFormAndValidation()
    // очистит поля ввода при изменение  props.isOpen
    React.useEffect(() => {
        resetForm()
        setValues('')
    }, [props.isOpen]);

    //обработчик submit 
    function handleSubmit(e) {
        e.preventDefault()
        props.onAddPlace({
            name: values.name,
            link: values.link,
        })
    }

    return (
        <PopupWithForm name={'popup-add-a-card'} title={'Новое место'} isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} onError={isValid}>
            <input onChange={handleChange} value={values.name || ''}
                className={`popup__form-input popup__form-input_name-add-a-card ${errors.name ? 'popup__form-input_error' : ''}`} id="add-a-card-title" type="text"
                name="name" placeholder="Название" required minLength="2" maxLength="30" />
            <span className="popup__span-input-error add-a-card-title-error" hidden={errors.name && false}>{errors.name}</span>
            <input onChange={handleChange} value={values.link || ''}
                className={`popup__form-input popup__form-input_name-add-a-card ${errors.link ? 'popup__form-input_error' : ''}`} id="add-a-card-link"
                type="url" name="link" placeholder="Ссылка на картинку" required />
            <span className="popup__span-input-error add-a-card-link-error" hidden={errors.link && false}>{errors.link}</span>
        </PopupWithForm>
    )
}

export default AddPlacePopup