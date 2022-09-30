import React from 'react'
import iconTrach from '../image/trash.svg'
import { CurrentUserContext } from '../components/context/CurrentUserContext'

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);

    //Функции обработчики. Получит обьект card и пробросит его в App
    function handleClick() { props.onCardClick(props.card) }
    function handleLikeClick() { props.onCardLike(props.card) }
    function handleDeleteClick() { props.onCardDelete(props.card) }

    //переменная для верефикации авторста карточки для иконки удаления
    const isOwn = props.card.owner._id === currentUser._id

    //переменные для кнопик like
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = `element__content-button-like
         ${isLiked && 'element__content-button-like-picture_active'}`;

    return (
        <article className="element__card">
            <button className="element__trash" onClick={handleDeleteClick} hidden={isOwn ? false : true} type="button">
                <img className="element__trash-picture" src={iconTrach} alt="Удалить" />
            </button>
            <div className="element__picture-wrapper">
                <img className="element__picture" src={props.card.link} alt={props.card.name} onClick={handleClick} />
            </div>
            <div className="element__content">
                <h2 className="element__content-title">{props.card.name}</h2>
                <div className="element__content-like-wrapper">
                    <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button"> </button>
                    <span className="element__content-like-number">{props.card.likes.length}</span>
                </div>
            </div>
        </article>)
}

export default Card;