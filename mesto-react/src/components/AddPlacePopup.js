import React from "react";
import PopupWithForm from './PopupWithForm'

function AddPlacePopup(props) {
    const [name, setName] = React.useState()
    const [link, setLink] = React.useState()

    // очистит поля ввода при изменение  props.isOpen
    React.useEffect(() => {
        setName('');
        setLink('');
    }, [props.isOpen]);

    function handleChange(e) {
        e.target.name === 'name' ? setName(e.target.value) : setLink(e.target.value);
    }

    //обработчик submit 
    function handleSubmit(e) {
        e.preventDefault()
        props.onAddPlace({
            name: name,
            link: link,
        })
    }

    return (
        <PopupWithForm name={'popup-add-a-card'} title={'Новое место'} isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <input onChange={handleChange} value={name || ''} className="popup__form-input popup__form-input_name-add-a-card" id="add-a-card-title" type="text"
                name="name" placeholder="Название" required minLength="2" maxLength="30" />
            <span className="popup__span-input-error add-a-card-title-error" hidden></span>
            <input onChange={handleChange} value={link || ''} className="popup__form-input  popup__form-input_description-add-a-card" id="add-a-card-link"
                type="url" name="link" placeholder="Ссылка на картинку" required />
            <span className="popup__span-input-error add-a-card-link-error" hidden></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup