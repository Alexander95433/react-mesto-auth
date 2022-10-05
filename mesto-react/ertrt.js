import React from "react";
import PopupWithForm from './PopupWithForm'
import UseForm from "./hooks/UseForm";
import useFormAndValidation from "./hooks/useFormAndValidation";

function AddPlacePopup(props) {
    // const [name, setName] = React.useState()
    // const [link, setLink] = React.useState()
    const {values, handleChange, setValues} = UseForm({})
     
    // очистит поля ввода при изменение  props.isOpen
    React.useEffect(() => {
        // setName('');
        // setLink('');
        setValues('')
    }, [props.isOpen]);
    
     // function handleChange(e) {
    //     // e.target.name === 'name' ? setName(e.target.value) : setLink(e.target.value);
    //     e.target.name === 'name' ? setValues(e.target.value) : setValues(e.target.value);
    // }

    //обработчик submit 
    function handleSubmit(e) {
        e.preventDefault()
        props.onAddPlace({
            name: values.name,
            link: values.link,
        })
    }

    return (
        <PopupWithForm name={'popup-add-a-card'} title={'Новое место'} isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <input onChange={handleChange} value={values.name || ''} className="popup__form-input popup__form-input_name-add-a-card" id="add-a-card-title" type="text"
                name="name" placeholder="Название" required minLength="2" maxLength="30" />
            <span className="popup__span-input-error add-a-card-title-error" hidden></span>
            <input onChange={handleChange} value={values.link || ''} className="popup__form-input  popup__form-input_description-add-a-card" id="add-a-card-link"
                type="url" name="link" placeholder="Ссылка на картинку" required />
            <span className="popup__span-input-error add-a-card-link-error" hidden></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup


import React from 'react';
import PopupWithForm from './PopupWithForm'
import { CurrentUserContext } from '../components/context/CurrentUserContext'
import UseForm from "./hooks/UseForm";
function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext)

    // const [name, setName] = React.useState()
    // const [description, setDescription] = React.useState()
    
    const {values, handleChange, setValues} = UseForm(currentUser)
    // обновит поля ввода с использованием данный из urrentUser при изменение props.isOpen
    React.useEffect(() => {
        // setName(currentUser.name)
        // setDescription(currentUser.about)
        setValues(currentUser)
         
    }, [currentUser ])
// , props.isOpen
    //синхронизирует поля формы с содержимым информации о профиле
    // function handleChange(e) {
    //     e.target.name === 'name' ? setName(e.target.value) : setDescription(e.target.value)
    // }

    // обработчик submit для формы
    function handleSubmit(e) {
        e.preventDefault()
        props.onUpdateUser({
            name: values.name,
            about: values.about,
        });
    }



    return (
        <PopupWithForm name={'popup-edit-profile'} title={'Редактировать профиль'} isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}  >
            <input onChange={handleChange} value={values.name || ''} className="popup__form-input popup__form-input_name-edit-profile" id="edit-profile-name"
                type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" required />
            <span className="popup__span-input-error edit-profile-name-error" hidden></span>
            <input onChange={handleChange} value={values.about || ''} className="popup__form-input popup__form-input_description-edit-profile"
                id="edit-profile-description" type="text" name="about" placeholder="О себе"
                minLength="2" maxLength="200" required />
            <span className="popup__span-input-error edit-profile-description-error" hidden></span>
        </PopupWithForm>)
}
export default EditProfilePopup