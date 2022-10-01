import React from "react";
import tooltipPicture from '../image/infoTooltip.svg'

function InfoTooltip(props) {

    return(
         <div className={`popup ${props.isOpen ? "popup_visible" : ""}`}>
            <div className="popup__window popup__InfoTooltip">
                <button className="popup__close"type='button' onClose={props.onClose}></button>
                <img className="popup__picture" src={tooltipPicture} alt='Подтверждено'></img>
                <h2 className="popup__title">Вы успешно зарегистрировались!</h2>
            </div>
        </div>
    )
}

export default InfoTooltip;