!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r);var o=document.querySelector(".header-buttonlist"),n=document.querySelector(".js-watched"),d=document.querySelector(".js-queue");o.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;e.target.classList.add("current--btn"),e.target.classList.contains("js-watched")&&d.classList.remove("current--btn");e.target.classList.contains("js-queue")&&n.classList.remove("current--btn")}));var c=r("5m7Gj"),s=document.querySelector(".film-myLibrary__list"),l=document.querySelector(".header-buttonlist"),i=(document.querySelector(".js-watched"),document.querySelector(".js-queue"),document.querySelector(".img-not-found"),"Watched"),u=localStorage.getItem(i),m=JSON.parse(u);function g(e){if(0===e.length)return s.innerHTML='<div class="error-box">\n  <p class="error-text-lib">Whoops( </br>\n  you haven\'t added anything yet\n  </p>\n  </div>';var t=e.map((function(e){var t=e.title,a=e.name,r=e.id,o=e.poster_path,n=e.vote_average,d=e.release_date,s=e.genre_ids,l="";return l=o?"https://image.tmdb.org/t/p/w500"+o:"https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=1000",'<li class="film-gallery__item" id="'.concat(r,'">\n        <div class="film-gallery__image-wrapper">\n        <img class="film-gallery__image" src="').concat(l,'"\n        alt="').concat(t||a,'" width ="394" height ="336"/>\n        </div>\n        <div class="film-gallery__info-wrapper">\n        <h3 class="film-gallery__name">').concat(a||t,'</h3>\n        <p class="film-gallery__info">\n        <span class="film-gallery__info-genres">\n        ').concat((0,c.matchGenresById)(s)||"No info",'</span>\n        |\n        <span class="film-gallery__info-year">').concat(d?d.slice(0,4):"No info",'</span>\n                      <span class="film-gallery__info-rang">').concat(n||"No info","</span>\n                      </p>\n                      </div>\n                      </li>")})).join("");s.insertAdjacentHTML("beforeend",t)}s.innerHTML="",g(m),l.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;if(e.target.classList.contains("js-watched")){i="Watched";var t=localStorage.getItem(i),a=JSON.parse(t);s.innerHTML="",g(a)}if(e.target.classList.contains("js-queue")){i="Queue";var r=localStorage.getItem(i),o=JSON.parse(r);s.innerHTML="",g(o)}})),r("ckBNW");var f="theme",y=document.querySelector(".themetoggle"),S=document.querySelector(".material-symbol");function v(){"dark"===localStorage.getItem("theme")?(document.querySelector("body").classList.remove("light"),document.querySelector("footer").classList.remove("footer-light"),document.querySelector("body").classList.add("dark"),document.querySelector("footer").classList.add("footer-dark"),document.querySelector("header").classList.add("heared-shaddow"),document.querySelector(".main-modal").classList.add("modal-dark"),S.textContent="dark_mode"):(document.querySelector("body").classList.remove("dark"),document.querySelector("footer").classList.remove("footer-dark"),document.querySelector("header").classList.remove("heared-shaddow"),document.querySelector(".main-modal").classList.remove("modal-dark"),document.querySelector("body").classList.add("light"),document.querySelector("footer").classList.add("footer-light"),S.textContent="wb_sunny")}y.addEventListener("click",(function(e){e.preventDefault(),"dark"===localStorage.getItem(f)?localStorage.removeItem(f):localStorage.setItem(f,"dark"),v()})),v();var L,p=r("9zkr1"),h=document.querySelector(".film-myLibrary__list"),_=document.querySelector("[data-main-modal]"),q=document.querySelector("[data-modal-main-close]"),b=document.querySelector(".main-modal__container"),w=document.querySelector("body");document.querySelector(".main-modal__backdrop");function N(e){"Escape"===e.code&&k()}function k(){_.classList.add("is-hidden"),w.classList.remove("overflow"),w.removeEventListener("keyup",N)}function I(e){e.target.classList.contains("main-modal__backdrop")&&k()}h.addEventListener("click",(function(e){if(!e.target.closest(".film-gallery__item"))return;_.classList.remove("is-hidden"),w.classList.add("overflow"),L=i;var t=e.target.closest(".film-gallery__item").id,a=JSON.parse(localStorage.getItem(L)).find((function(e){return e.id.toString()===t}));b.innerHTML=(0,p.renderMarkupModal)(a),w.addEventListener("keyup",N),q.addEventListener("click",k),document.addEventListener("click",I);var r=[],o=[],n=document.querySelector(".main-modal__buttons--watched");n.textContent="Remove in watched",n.classList.add("added");var d=document.querySelector(".main-modal__buttons--queue");d.textContent="Remove in queue",d.classList.add("added"),localStorage.getItem("Watched").includes(a.id)||(n.textContent="Add to watched",n.classList.remove("added"));localStorage.getItem("Queue").includes(a.id)||(d.textContent="Add to queue",d.classList.remove("added"));document.querySelector(".main-modal__buttons").addEventListener("click",(function(e){if("BUTTON"===e.target.nodeName){if(e.target.classList.contains("main-modal__buttons--watched")){if(localStorage.getItem("Watched")&&(r=JSON.parse(localStorage.getItem("Watched"))),e.target.classList.contains("added")){var t=r.findIndex((function(e){return e.id===a.id}));return r.splice(t,1),localStorage.setItem("Watched",JSON.stringify(r)),n.textContent="Add to watched",n.classList.remove("added"),s.innerHTML="",void g(JSON.parse(localStorage.getItem(L)))}r.push(a),localStorage.setItem("Watched",JSON.stringify(r)),n.textContent="Remove in watched",n.classList.add("added"),s.innerHTML="",g(JSON.parse(localStorage.getItem(L)))}if(e.target.classList.contains("main-modal__buttons--queue")){if(localStorage.getItem("Queue")&&(o=JSON.parse(localStorage.getItem("Queue"))),e.target.classList.contains("added")){var c=o.findIndex((function(e){return e.id===a.id}));return o.splice(c,1),localStorage.setItem("Queue",JSON.stringify(o)),d.textContent="Add to queue",d.classList.remove("added"),s.innerHTML="",void g(JSON.parse(localStorage.getItem(L)))}o.push(a),localStorage.setItem("Queue",JSON.stringify(o)),d.textContent="Remove in queue",d.classList.add("added"),s.innerHTML="",g(JSON.parse(localStorage.getItem(L)))}}}))}))}();
//# sourceMappingURL=library.b8646509.js.map