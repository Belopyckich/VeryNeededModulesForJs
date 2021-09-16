require('es6-promise').polyfill();
import 'polyfill-nodelist-foreach';

//модуль табов
import tabs from'./modules/tabs';
//модальное окно 
import modal from'./modules/modal';
//таймер
import timer from'./modules/timer';
//калькулятор
import calc from'./modules/calc';
//карточки выгружаемые из json файла
import cards from'./modules/cards';
//форма
import forms from'./modules/forms';
//красивый слайдер
import slider from'./modules/slider';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 3000);

    tabs('.tabheader__item', '.tabheader__items', '.tabcontent', 'tabheader__item_active');
    modal('[data-modal]', '.modal');
    timer('.timer', '2021-08-20');
    calc();
    cards();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
    });
});
