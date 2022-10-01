//import { data } from "autoprefixer";

// import { register } from "../../../../../react-mesto-auth/src/utils/ApiAuth";

class Api {
    constructor(options) {
        this._host = options.host;
        this._headers = options.headers;
    };

    //Анализ ответа сервера
    _responseAnalysis(res) {
        if (res.ok ) { return res.json(); }
        return Promise.reject(`Что-то пошло не так  ${res.status}`)
    };

    //получение информации о пользователе
    getUserInfo() {
        return fetch(`${this._host}/users/me`,
            {
                headers: this._headers
            })
            .then(res => this._responseAnalysis(res))
    };

    //отправка данный из popup edit profile на сервер 
    sendUserInfo(data) {
        return fetch(`${this._host}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about,
            })
        })
            .then(res => this._responseAnalysis(res))
    };

    //Загрузка карточек с сервера 
    getCards() {
        return fetch(`${this._host}/cards`,
            {
                headers: this._headers
            })
            .then(res => this._responseAnalysis(res))
    };

    //Добавление новой карточки на сервер
    sendNewCard(data) {
        return fetch(`${this._host}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link,
            })
        })
            .then(res => this._responseAnalysis(res))
    };

    //Удаление своей карточки с сервера
    deleteCard(cardId) {
        return fetch(`${this._host}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(res => this._responseAnalysis(res))
    };

    //////////////////////////////////////////////////////////    

    //Поставить like убрать  like
    changeLikeCardStatus(cardId, isLiked) {

        return fetch(`${this._host}/cards/${cardId}/likes`, {
            method: `${isLiked ? 'DELETE' : 'PUT'}`,
            headers: this._headers
        })
            .then(res => this._responseAnalysis(res))
    };

    //////////////////////////////////////////////////////////



    //Обновление аватара пользователя
    avatarUpdate(avatarId) {
        return fetch(`${this._host}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatarId.link
            })
        })
            .then(res => this._responseAnalysis(res))
    };

    ///////////////////////////////////////////////////////////////////////////////////////
    // _request(data, email, password,) {
    //     return fetch(`${this._host}${data.url}`, {
    //         method: data.methodName,
    //         headers: this._headers,
    //         body: JSON.stringify({ 'password': password, 'email': email })
    //     }).then(res => this._responseAnalysis(res))
    // }

    // register(endpoint, methodName, email, password) {
    //     return this._request({
    //         url: endpoint,
    //         methodName: methodName,
    //         body: { email, password }
    //     }, email, password)
    // };




    ///////////////////////////////////////////////////////////
};




const api = new Api({
    host: 'https://mesto.nomoreparties.co/v1/cohort-47',
    headers: {
        authorization: '39dffeee-b595-4873-9b86-da022740c5b2',
        'Content-Type': 'application/json'
    },
});


// const apiAuth = new Api({
//     host: 'https://auth.nomoreparties.co/',
//     headers: { "Content-Type": "application/json" }
// })

// export { api, apiAuth };
export default api;