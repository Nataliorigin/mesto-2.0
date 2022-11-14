/*Открытие попапа для редактирования профиля*/
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__button-close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

console.log(popupOpenButtonElement);

const openPopup = function(event) {

  popupElement.classList.add('popup_action-opened');
  nameInput.value = profileNameElement.textContent;
  activityInput.value = profileActivityElement.textContent;
}
const closePopup = function () {
  popupElement.classList.remove('popup_action-opened');
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

/*Изменение и сохрание имени профиля*/
let profileNameElement = document.querySelector('.profile__title');
let profileActivityElement = document.querySelector('.profile__subtitle');
let formElement = popupElement.querySelector('.popup__form');
let nameInput = popupElement.querySelector('.popup__form-name');
let activityInput = popupElement.querySelector('.popup__form-activity');

function formSubmitHandler(evt) {
  evt.preventDefault(); 
  profileNameElement.textContent = nameInput.value;
  profileActivityElement.textContent = activityInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', closePopup)