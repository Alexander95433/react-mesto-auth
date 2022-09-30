import React from 'react'

function ImagePopup(props) {
    if (!props.card.link) return
    return (
        <figure className="popup popup_zoom-cards popup_visible">
            <div className="popup__window popup__window_zoom-cards">
                <button className="popup__close popup__close_zoom-cards" type='button' onClick={props.onClose}></button>
                <img className="popup__picture-zoom-cards" src={props.card.link} alt={props.card.name} />
                <figcaption className="popup__subtitle-zoom-cards">{props.card.name}</figcaption>
            </div>
        </figure>)
};

export default ImagePopup;