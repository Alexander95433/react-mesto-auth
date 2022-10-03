import React from "react";
import tooltipPicture from '../image/infoTooltip.svg'
import tooltipPictureError from '../image/infoTooltipErr.svg'

function InfoTooltip(props) {
    return (
        <div className={`popup ${props.isOpen ? "popup_visible" : ""}`}>
            <div className="popup__window popup__InfoTooltip">
                <button className="popup__close" type='button' onClick={props.onClose}></button>
                <img className="popup__picture" src={props.onTooltipError ? tooltipPictureError : tooltipPicture} alt='Подтверждено'></img>
                <h2 className="popup__title">{props.onTooltipError ? 'Что-то пошло не так! Попробуйте ещё раз.' : 'Вы успешно зарегистрировались!'}</h2>
            </div>
        </div>
    )
}

export default InfoTooltip;