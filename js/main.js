
//Создали переменную для селектора контейнер
let container = document.querySelector('.container');
//Создали переменную для селектора контейнер для песен
let songsContainer = container.querySelector('.songs-container');
//Создали переменную для селектора "кнопки добавления песен"
let addButton = container.querySelector('.form__submit-btn_action_add');
//Создали переменную для селектора "кнопки очищения списка плейлиста"
let resetButton = container.querySelector('.form__submit-btn_action_reset');
//Создали функцию с условием неактивной кнопки ресет.
function renderAdded() {

	let songs = songsContainer.querySelectorAll('.song');
	/* определите переменную noSongsElement.
	В неё должен попадать элемент с классом .no-songs */
	let noSongsElement = container.querySelector('.no-songs');
	if (songs.length === 0) {
		resetButton.setAttribute('disabled', 'true');
		resetButton.classList.add('form__submit-btn_disabled');
		// необходимо убрать скрытие, если песен нет
		noSongsElement.classList.remove('no-songs_hidden');
	}
	else {
		resetButton.removeAttribute('disabled');
		resetButton.classList.remove('form__submit-btn_disabled');
		// необходимо скрыть элемент no-songs, если в плейлисте есть треки
		noSongsElement.classList.add('no-songs_hidden');
	}
}
//Создали функцию для добавления песни, с функцией ресет, если песен нет. 
function addSong() {
	let artist = document.querySelector('.input__text_type_artist');
	let song = document.querySelector('.input__text_type_song');
	songsContainer.insertAdjacentHTML('beforeend', `<div class="song">
  <h4 class="song__artist">${artist.value}</h4>
  <p class="song__title">${song.value}</p>
  <button class="song__like"></button></div>`);
	artist.value = '';
	song.value = '';
	renderAdded();
}
addButton.addEventListener('click', addSong);
//проверка функцией ресет, если в списк нет песен.
renderAdded(); 

