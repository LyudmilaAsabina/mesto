
const formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('#edit_name');
let jobInput = formElement.querySelector('#edit_comment');
let profileAuthor = document.querySelector('.profile__author');
let profileSubline = document.querySelector('.profile__author-subline');
const formOpener = document.querySelector('.profile__edit-button');
const content = document.querySelector('.popup');
const formCloused = document.querySelector('.popup__close-button')
const formCloser = document.querySelector('.popup__close-button');

function popupOpened() {
    content.classList.add('popup_opened');
    nameInput.value = profileAuthor.textContent;
    jobInput.value = profileSubline.textContent;
}
formOpener.addEventListener('click', popupOpened);

function popupClosed() {
    content.classList.remove('popup_opened');
}

formCloser.addEventListener('click', popupClosed);


function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileAuthor.textContent = nameInput.value;
    profileSubline.textContent = jobInput.value;
    popupClosed();
}

formElement.addEventListener('submit', formSubmitHandler);











