import React from 'react';
import iconInfoButton from '../image/Button_profile.svg';
import iconAddButton from '../image/Vector.svg';
import Card from './Card';
import { CurrentUserContext } from '../components/context/CurrentUserContext'

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);
    return (
        <main className="main">
            <section className="profile">
                <div className="profile__wrapper">
                    <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                        <div className="profile__avatar-loading" hidden={props.onLoading && true}></div>
                        <p className="profile__avatar-loading-title" hidden={props.onLoading && true} >Загрузка...</p>
                        <img className="profile__avatar" src={currentUser.avatar} alt="Фото профиля" hidden={!props.onLoading && true} />
                    </div>
                    <div className="profile__content">
                        <div className="profile__info">
                            <h1 className="profile__info-name">{currentUser.name}</h1>
                            <p className="profile__info-description"> {currentUser.about}</p>
                        </div>
                        <button className="profile__info-button" type="button" onClick={props.onEditProfile}>
                            <img className="profile__info-button-picture" src={iconInfoButton} alt="Открыть" />
                        </button>
                    </div>
                </div>
                <button className="profile__picture-cross-box" type="button" onClick={props.onAddPlace}>
                    <img className="profile__picture-cross" src={iconAddButton} alt="Добавить" />
                </button>
            </section>

            <section className="element">
                {props.cards.map((item) => (
                    <Card key={item._id} onCardDelete={props.onCardDelete} onCardLike={props.onCardLike} card={item} onCardClick={props.onCardClick} />))}
            </section>
        </main>
    )
}

export default Main;
