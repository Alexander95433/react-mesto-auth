import React from 'react';
import PopupWithForm from './PopupWithForm'
import { CurrentUserContext } from '../components/context/CurrentUserContext'

function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext)

    const [name, setName] = React.useState()
    const [description, setDescription] = React.useState()

    // обновит поля ввода с использованием данный из urrentUser при изменение props.isOpen
    React.useEffect(() => {
        setName(currentUser.name)
        setDescription(currentUser.about)
    }, [currentUser, props.isOpen])

    //синхронизирует поля формы с содержимым информации о профиле
    function handleChange(e) {
        e.target.name === 'name' ? setName(e.target.value) : setDescription(e.target.value)
    }

    // обработчик submit для формы
    function handleSubmit(e) {
        e.preventDefault()
        props.onUpdateUser({
            name: name,
            about: description,
        });
    }



    return (
        <PopupWithForm name={'popup-edit-profile'} title={'Редактировать профиль'} isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}  >
            <input onChange={handleChange} value={name || ''} className="popup__form-input popup__form-input_name-edit-profile" id="edit-profile-name"
                type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" required />
            <span className="popup__span-input-error edit-profile-name-error" hidden></span>
            <input onChange={handleChange} value={description || ''} className="popup__form-input popup__form-input_description-edit-profile"
                id="edit-profile-description" type="text" name="about" placeholder="О себе"
                minLength="2" maxLength="200" required />
            <span className="popup__span-input-error edit-profile-description-error" hidden></span>
        </PopupWithForm>)
}
export default EditProfilePopup