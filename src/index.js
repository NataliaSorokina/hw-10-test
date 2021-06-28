import './sass/main.scss';
import './js/theme-switch.js'
import dishes from './js/menu.json';
import dishesTemplate from '../src/templates/menu-items.hbs';

const menuBoard = document.querySelector('.js-menu');
const dishCardsMarkup = createDishCards(dishes);

menuBoard.insertAdjacentHTML('beforeend', dishCardsMarkup);

function createDishCards(dishes) {
    return dishesTemplate(dishes);
}


