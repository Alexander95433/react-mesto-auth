import React from "react";
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup(props) {
    const inputAvatar = React.useRef()

    // очистит поля ввода при изменение  props.isOpen
    React.useEffect(() => {
        inputAvatar.current.value = '';
    }, [props.isOpen])

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            link: inputAvatar.current.value
        });
    }

    return (
        <PopupWithForm name={'popup-update-avatar'} title={'Обновить аватар'} isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <input ref={inputAvatar} className="popup__form-input  popup__form-input_update-avatar" id="update-avatar-link" type="url"
                name="link" placeholder="Ссылка на картинку" required />
            <span className="popup__span-input-error update-avatar-link-error" hidden></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup