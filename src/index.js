import 'animate.css';
import { form, onFormSubmit, addLocalStore } from './js/header/header_value';
import { renderMarkup } from './js/templates/renderMarkup';
import './js/footer/footer-modal';
import { pagination, valueFromInput } from './js/pagination/pagination';
import { getTrendData, getGenre } from './js/api/api_fetch';
import { renderMarkupModal } from './js/mainModal/renderMarkupModal';
import './js/mainModal/mainModal';
import './js/toggler/theme';
import './js/backToTop/BackToTop';
import { renderSliderMarkup } from './js/slider/slider';
import Flickity from 'flickity';
import 'flickity/dist/flickity.css';
import './js/sort/sort';
import './js/toggler/theme';

export const filmGallery = document.querySelector('.film-gallery__list');
export const GENRES_KEY = 'genres';
const CURRENT_FILMS_KEY = 'current films';
const spinnerDiv = document.querySelector('.loader');
const slider = document.querySelector('.slider');

async function checkGenresInLocaleStorage() {
  const { genres } = await getGenre();
  console.log(genres);
  localStorage.setItem(GENRES_KEY, JSON.stringify(genres));
}

if (!localStorage.getItem(GENRES_KEY)) {
  checkGenresInLocaleStorage();
}

export function showSpinner() {
  spinnerDiv.style.display = 'block';
}

export function hideSpinner() {
  spinnerDiv.style.display = 'none';
}

getTrendData()
  .then(response => {
    localStorage.setItem(CURRENT_FILMS_KEY, JSON.stringify(response.results));
    localStorage.removeItem('INPUT_VALUE');
    filmGallery.insertAdjacentHTML('beforeend', renderMarkup(response));

    renderSliderMarkup(response);
    hideSpinner();
  })
  .catch(console.error);
