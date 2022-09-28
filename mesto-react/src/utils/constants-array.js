const buttonPopupOn = document.querySelector('.profile__info-button');
const popupFormEdit = document.querySelector('.popup__form-edit-profile');
const formNameEdit = popupFormEdit.querySelector('.popup__form-input_name-edit-profile');
const formDescriptionEdit = popupFormEdit.querySelector('.popup__form-input_description-edit-profile');
const buttonCard = document.querySelector('.profile__picture-cross-box');
const avatarWrapper = document.querySelector('.profile__avatar-container')

const config = {
    elementTemplate: '#element-template',
    likeButton: '.element__content-button-like',
    deleteIcon: '.element__trash',
    popupZoomCardsPictureWraper: '.element__picture-wrapper',
    popupZoomCardsSubtitle: '.popup__subtitle-zoom-cards',
    popups: '.popup',
    formSelector: '.popup__form',
    formFieldset: '.popup__fieldset',
    inputSelector: '.popup__form-input',
    submitButtonSelector: '.popup__form-button',
    inputErrorClass: 'popup__form-input_error',
    errorClass: 'popup__span-input-error',
    likeButtonActive: 'element__content-button-like-picture_active',
    picture: '.element__picture',
    likeContainer: '.element__content-like-number',
    trashButton: '.element__trash',
    contentTitle: '.element__content-title',
    cardBody: '.element__card',
};
export { buttonPopupOn, popupFormEdit, formNameEdit, formDescriptionEdit, buttonCard, config, avatarWrapper };