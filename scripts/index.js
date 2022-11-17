/*Открытие попапа для редактирования профиля*/
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__button-close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
/*Изменение и сохрание имени профиля*/
const profileNameElement = document.querySelector('.profile__title');
const profileActivityElement = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.form__input_name_username');
const activityInput = document.querySelector('.form__input_name_activity');
/*Добавление избражения*/
const elementsContainer = document.querySelector('.elements__container');
const addButton = document.querySelector('.profile__add-button');


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

// function addElement() {
//   elementsContainer.insertAdjacentHTML('afterbegin',`<li class="elements__item item">
//               <img class="item__image" src="./img/alsu-vershinina.jpg"
//                 alt="Украшенная елка">
//               <div class="item__container">
//                 <h2 class="item__title">Ёлка</h2>
//                 <div class="item__like "></div>
//               </div>
//             </li>`);
// }

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
// addButton.addEventListener('click', addElement);