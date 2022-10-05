import React from 'react';
import { Route, Switch } from 'react-router-dom';

import '../App.css';
import Header from './Header';
import Main from './Main';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'
import api from '../utils/Api'
import { CurrentUserContext } from '../components/context/CurrentUserContext'
import { useHistory } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';
import ProtectedRouter from './ProtectedRouter';
import apiAuth from '../utils/ApiAuth'

function App() {
    const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setselectedCard] = React.useState({ name: '', link: '' })

    const [email, setEmail] = React.useState('@Email')
    const [loggedIn, setLoggedIn] = React.useState(false)
    const history = useHistory();

    const [currentUser, setCurrentUser] = React.useState({})
    const [cards, setCards] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [tooltip, setTooltip] = React.useState(false)
    const [errorTooltip, setErrorTooltip] = React.useState(false)
    const [closeButton, setCloseButton] = React.useState(false)
    const isOpen = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard;

    React.useEffect(() => {

        handleTokenCheck();
    }, [loggedIn]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
            .then((([dataUser, dataCards]) => {
                setCurrentUser(dataUser)
                setCards(dataCards)
            }))
            .catch(err => console.log(`Ошибка: ${err}`))
            .finally(() => setLoading(true))
    }, [])

    // запрос к api за данными о пользователя
    function handleUpdateUser(data) {
        api.sendUserInfo(data)
            .then((data) => { setCurrentUser(data); closeAllPopups() })
            .catch(err => console.log(`Ошибка: получения данный о пользователе ${err}`))
    }

    //запрос к api для обновления аватара 
    function handleUpdateAvatar(avatarId) {
        api.avatarUpdate(avatarId)
            .then((data) => { setCurrentUser(data); closeAllPopups() })
            .catch(err => console.log(`Ошибка: при загрузку аватара ${err}`))
    }

    // запрос к api для добавления новой карточки
    function handleAddPlaceSubmit(dataCard) {
        api.sendNewCard(dataCard)
            .then((data) => { setCards([data, ...cards]); closeAllPopups() })
            .catch(err => console.log(`Ошибка: при загрузке новой карточки ${err}`))
    }

    //like
    function handleCardLike(card) {
        const isLiked = card.likes.some(item => item._id === currentUser._id);
        api.changeLikeCardStatus(card._id, isLiked)
            .then((data) => {
                setCards((state) => state.map(item => item._id === card._id ? data : item));
            })
            .catch(err => console.log(err))
    }

    // обработчик вызова удаления карточки onCardClick
    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => { setCards((stste) => (stste.filter(item => item._id !== card._id))) })
            .catch(err => console.log(err))
    }

    function handleRegister(data) {
        apiAuth.register(data)
            .then((res) => {
                if (res) {
                    setLoggedIn(true)
                    history.push('/sign-in');
                    setTooltip(true)
                    setErrorTooltip(false)
                    console.log(res)
                }
            })
            .catch((err) => {
                setTooltip(true)
                setErrorTooltip(true)
                console.log(`Ошибка регистрации: ${err}`)
            })
    }

    function authorization(data) {
        apiAuth.authorization(data)
            .then((res) => {
                if (res.token) {
                    localStorage.setItem('jwt', res.token)
                    setLoggedIn(true)
                    setErrorTooltip(false)
                    history.push('/');
                    console.log(res)
                } else { return }
            })
            .catch((err) => {
                setTooltip(true)
                setErrorTooltip(true)
                console.log(`Ошибка входа в систему: ${err}`)
            })
    }

    function handleTokenCheck() {
        const jwt = localStorage.getItem('jwt')
        if (jwt) {
            apiAuth.checkToken({
                endpoint: 'users/me',
                methodName: 'GET',
                token: jwt,
            }).then((res) => {
                if (res) {
                    setLoggedIn(true);
                    history.push('/');
                    setEmail(res.data.email)
                }
            }).catch((err) => { console.log(`Ошибка проверки токена: ${err}`) })
        }
    }

    function handleClickExit() {
        setCloseButton(false)
        localStorage.removeItem('jwt')
        history.push('/sign-in')
        setLoggedIn(false)
    }

    //Закрывает все попапы 
    function closeAllPopups() {
        setisEditProfilePopupOpen(false)
        setisAddPlacePopupOpen(false)
        setisEditAvatarPopupOpen(false)
        setTooltip(false)
        setselectedCard({ name: '', link: '' })
    };


    // закрывает попапы на esc
    React.useEffect(() => {
        function closeByEscape(evt) {
            if (evt.key === 'Escape') { closeAllPopups(); }
        }
        if (isOpen) {
            document.addEventListener('keydown', closeByEscape);
            return () => { document.removeEventListener('keydown', closeByEscape); }
        }
    }, [isOpen])

    //принимает обьект с карточкой из компонента Card
    function handleCardClick(card) { setselectedCard(card) };


    function hendleBurger() {
        setCloseButton(!closeButton)
    }

    return (
        <div className={`page ${closeButton ? 'page_burger-open' : ''}`}>
            <CurrentUserContext.Provider value={currentUser}>
                <Header onEmail={email} onClickExit={handleClickExit} onBurger={hendleBurger} onCloseButton={closeButton} />
                <Switch>
                    <Route path='/sign-up'>
                        <Register onRegister={handleRegister} onTooltip={() => { setTooltip(true) }}></Register>
                    </Route>
                    <Route path='/sign-in'>
                        <Login onAuthorization={authorization} ></Login>
                    </Route>
                    <ProtectedRouter exact path='/' logiedId={loggedIn} component={Main} onEditProfile={() => { setisEditProfilePopupOpen(true) }}
                        onAddPlace={() => { setisAddPlacePopupOpen(true) }} onEditAvatar={() => { setisEditAvatarPopupOpen(true) }}
                        onCardClick={handleCardClick} cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} onLoading={loading}
                    />
                </Switch>
                <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
                <ImagePopup card={selectedCard} onClose={closeAllPopups} />
                <InfoTooltip onClose={closeAllPopups} onTooltipError={errorTooltip} isOpen={tooltip} />
            </CurrentUserContext.Provider>
        </div>
    );
}


export default App;