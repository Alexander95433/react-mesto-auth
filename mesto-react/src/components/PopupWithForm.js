import React from 'react';

function PopupWithForm(props) {
    // debugger
    return (
        <div className={`popup ${props.name} ${props.isOpen ? 'popup_visible' : ""}`}>
            <div className="popup__window">
                <button className="popup__close"type='button' onClick={props.onClose}></button>
                <h2 className="popup__title">{props.title}</h2>
                <form className="popup__form" onSubmit={props.onSubmit} name={props.name} noValidate>
                    <fieldset className="popup__fieldset">
                        {props.children}
                        <button className="popup__form-button" type="submit" disabled={!props.onError && true}>Сохранить</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
};

export default PopupWithForm;
