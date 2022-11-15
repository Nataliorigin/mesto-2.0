/*Открытие попапа для редактирования профиля*/
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__button-close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
/*Изменение и сохрание имени профиля*/
const profileNameElement = document.querySelector('.profile__title');
const profileActivityElement = document.querySelector('.profile__subtitle');
const formElement = popupElement.querySelector('.popup__form');
const nameInput = popupElement.querySelector('.popup__form-name');
const activityInput = popupElement.querySelector('.popup__form-activity');
console.log(popupOpenButtonElement);

const openPopup = function (event) {
  popupElement.classList.add('popup_opened');
  nameInput.value = profileNameElement.textContent;
  activityInput.value = profileActivityElement.textContent;
}
const closePopup = function () {
  popupElement.classList.remove('popup_opened');
}
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileNameElement.textContent = nameInput.value;
  profileActivityElement.textContent = activityInput.value;
  closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);