import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');

const makeGalleryCard = ({ preview, original, description } = {}) => {
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
    </div>  
    `;
};

const galleryCards = galleryItems.map((elem) => {
    return makeGalleryCard(elem);
});

galleryListEl.insertAdjacentHTML('beforeend', galleryCards.join(''));

const instance = basicLightbox.create(`<img class="gallery__image" src="" width="1280" height="853">`,
{
onShow: (instance) => { window.addEventListener('keydown', onEscClick) },
onClose: (instance) => { window.removeEventListener('keydown', onEscClick) }
}
);

galleryListEl.addEventListener("click", onImageClick);

function onImageClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }

    instance.element().querySelector('img').src = e.target.dataset.source;
    instance.show();
}

function onEscClick(e) {
    if (e.code === 'Escape') {
        instance.close();
        return;
    }
};



// Задание 1 - галерея изображений
// Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения в модальном окне. Посмотри демо видео работы галереи.

// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе <img>, и указываться в href ссылки. Не добавляй другие HTML теги или CSS классы кроме тех, что есть в этом шаблоне.

// <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>

// Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по умолчанию пользователь будет перенаправлен на другую страницу. Запрети это поведение по умолчанию.

// Закрытие с клавиатуры
// ВНИМАНИЕ
// Этот функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.

// Добавь закрытие модального окна по нажатию клавиши Escape. Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно. У библиотеки basicLightbox есть метод для программного закрытия модального окна.