!function(){function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o),o.register("5m7Gj",(function(t,n){e(t.exports,"matchGenresById",(function(){return o})),e(t.exports,"matchGenresByIdForModal",(function(){return r}));var a="genres";function o(e){if(!e)return"";var t,n=localStorage.getItem(a),o=JSON.parse(n).filter((function(t){var n=t.id;return e.includes(n)})).map((function(e){return e.name}));return(t=o).length>3?"".concat(t[0],", ").concat(t[1]," and ").concat(t.length-2," Others"):t.join(", ")}function r(e){if(!e)return"";var t=localStorage.getItem(a),n=JSON.parse(t).filter((function(t){var n=t.id;return e.includes(n)})).map((function(e){return e.name}));return 0==n.length?"No info":n.join(", ")}})),o.register("ckBNW",(function(e,t){var n=o("2v9sy"),a=document.querySelector(".open-pop-up"),r=document.querySelector(".pop-up-close"),i=document.querySelector(".pop-up"),l=document.querySelector("body"),s=document.querySelector(".pop-up-container");function c(e){"Escape"===e.code&&d()}function d(){i.classList.remove("open"),l.classList.remove("disable-scroll"),l.removeEventListener("keyup",c),window.removeEventListener("click",c)}function u(e){e.target==s&&d()}a.addEventListener("click",(function(e){"open-pop-up"===e.srcElement.className&&(e.preventDefault(),i.classList.add("open"),(0,n.default)(),l.addEventListener("keyup",c),window.addEventListener("click",u),r.addEventListener("click",d),l.classList.add("disable-scroll"))}))})),o.register("2v9sy",(function(t,n){e(t.exports,"default",(function(){return r}));var a=o("19eBY");function r(){a.default.create(document.getElementById("canvas"),{resize:!0,useWorker:!0})({particleCount:200,spread:200,zIndex:2021})}})),o.register("19eBY",(function(t,n){e(t.exports,"default",(function(){return o}));var a={};!function e(t,n,a,o){var r=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function i(){}function l(e){var a=n.exports.Promise,o=void 0!==a?a:t.Promise;return"function"==typeof o?new o(e):(e(i,i),null)}var s,c,d,u,f,m,h,p,g,v=(d=Math.floor(1e3/60),u={},f=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(s=function(e){var t=Math.random();return u[t]=requestAnimationFrame((function n(a){f===a||f+d-1<a?(f=a,delete u[t],e()):u[t]=requestAnimationFrame(n)})),t},c=function(e){u[e]&&cancelAnimationFrame(u[e])}):(s=function(e){return setTimeout(e,d)},c=function(e){return clearTimeout(e)}),{frame:s,cancel:c}),b=(p={},function(){if(m)return m;if(!a&&r){var t=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{m=new Worker(URL.createObjectURL(new Blob([t])))}catch(e){return"function"==typeof console.warn&&console.warn("🎊 Could not load worker",e),null}!function(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(n,a,o){if(h)return t(n,null),h;var r=Math.random().toString(36).slice(2);return h=l((function(a){function i(t){t.data.callback===r&&(delete p[r],e.removeEventListener("message",i),h=null,o(),a())}e.addEventListener("message",i),t(n,r),p[r]=i.bind(null,{data:{callback:r}})}))},e.reset=function(){for(var t in e.postMessage({reset:!0}),p)p[t](),delete p[t]}}(m)}return m}),y={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function w(e,t,n){return function(e,t){return t?t(e):e}(e&&null!=e[t]?e[t]:y[t],n)}function _(e){return e<0?0:Math.floor(e)}function M(e){return parseInt(e,16)}function x(e){return e.map(k)}function k(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:M(t.substring(0,2)),g:M(t.substring(2,4)),b:M(t.substring(4,6))}}function E(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function S(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function I(e,t,n,r,i){var s,c,d=t.slice(),u=e.getContext("2d"),f=l((function(t){function l(){s=c=null,u.clearRect(0,0,r.width,r.height),i(),t()}s=v.frame((function t(){!a||r.width===o.width&&r.height===o.height||(r.width=e.width=o.width,r.height=e.height=o.height),r.width||r.height||(n(e),r.width=e.width,r.height=e.height),u.clearRect(0,0,r.width,r.height),d=d.filter((function(e){return function(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var n=t.tick++/t.totalTicks,a=t.x+t.random*t.tiltCos,o=t.y+t.random*t.tiltSin,r=t.wobbleX+t.random*t.tiltCos,i=t.wobbleY+t.random*t.tiltSin;return e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),"circle"===t.shape?e.ellipse?e.ellipse(t.x,t.y,Math.abs(r-a)*t.ovalScalar,Math.abs(i-o)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,n,a,o,r,i,l,s){e.save(),e.translate(t,n),e.rotate(r),e.scale(a,o),e.arc(0,0,1,i,l,s),e.restore()}(e,t.x,t.y,Math.abs(r-a)*t.ovalScalar,Math.abs(i-o)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):(e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(o)),e.lineTo(Math.floor(r),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(t.wobbleY))),e.closePath(),e.fill(),t.tick<t.totalTicks}(u,e)})),d.length?s=v.frame(t):l()})),c=l}));return{addFettis:function(e){return d=d.concat(e),f},canvas:e,promise:f,reset:function(){s&&v.cancel(s),c&&c()}}}function C(e,n){var a,o=!e,i=!!w(n||{},"resize"),s=w(n,"disableForReducedMotion",Boolean),c=r&&!!w(n||{},"useWorker")?b():null,d=o?E:S,u=!(!e||!c)&&!!e.__confetti_initialized,f="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function m(t,n,o){for(var r,i,l,s,c,u=w(t,"particleCount",_),f=w(t,"angle",Number),m=w(t,"spread",Number),h=w(t,"startVelocity",Number),p=w(t,"decay",Number),g=w(t,"gravity",Number),v=w(t,"drift",Number),b=w(t,"colors",x),y=w(t,"ticks",Number),M=w(t,"shapes"),k=w(t,"scalar"),E=function(e){var t=w(e,"origin",Object);return t.x=w(t,"x",Number),t.y=w(t,"y",Number),t}(t),S=u,C=[],T=e.width*E.x,N=e.height*E.y;S--;)C.push((r={x:T,y:N,angle:f,spread:m,startVelocity:h,color:b[S%b.length],shape:M[(s=0,c=M.length,Math.floor(Math.random()*(c-s))+s)],ticks:y,decay:p,gravity:g,drift:v,scalar:k},i=void 0,l=void 0,i=r.angle*(Math.PI/180),l=r.spread*(Math.PI/180),{x:r.x,y:r.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*r.startVelocity+Math.random()*r.startVelocity,angle2D:-i+(.5*l-Math.random()*l),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*r.gravity,ovalScalar:.6,scalar:r.scalar}));return a?a.addFettis(C):(a=I(e,C,d,n,o)).promise}function h(n){var r=s||w(n,"disableForReducedMotion",Boolean),h=w(n,"zIndex",Number);if(r&&f)return l((function(e){e()}));o&&a?e=a.canvas:o&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(h),document.body.appendChild(e)),i&&!u&&d(e);var p={width:e.width,height:e.height};function g(){if(c){var t={getBoundingClientRect:function(){if(!o)return e.getBoundingClientRect()}};return d(t),void c.postMessage({resize:{width:t.width,height:t.height}})}p.width=p.height=null}function v(){a=null,i&&t.removeEventListener("resize",g),o&&e&&(document.body.removeChild(e),e=null,u=!1)}return c&&!u&&c.init(e),u=!0,c&&(e.__confetti_initialized=!0),i&&t.addEventListener("resize",g,!1),c?c.fire(n,p,v):m(n,p,v)}return h.reset=function(){c&&c.reset(),a&&a.reset()},h}function T(){return g||(g=C(null,{useWorker:!0,resize:!0})),g}n.exports=function(){return T().apply(this,arguments)},n.exports.reset=function(){T().reset()},n.exports.create=C}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),a,!1);var o=a.exports;a.exports.create})),o.register("9zkr1",(function(t,n){e(t.exports,"renderMarkupModal",(function(){return r}));var a=o("5m7Gj");function r(e){var t=e.poster_path,n=e.title,o=e.name,r=e.vote_average,i=e.vote_count,l=e.popularity,s=e.genre_ids,c=e.overview;return'            <div class="main-modal__preview">\n                        <img src="'.concat(t?"https://image.tmdb.org/t/p/w500"+t:"https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=1000",'" alt="').concat(n||o,'"/>\n                      </div>\n                      <div>\n                        <h2 class="main-modal__title">').concat(n,'</h2>\n                        <div class="main-modal__box">\n                          <table>\n                            <tr>\n                              <td class="main-modal__features">Vote / Votes</td>\n                              <td class="main-modal__values"><span class="main-modal__values--vote">').concat(r.toFixed(1)||"No info",'</span><span class="main-modal__values--slash"> /</span><span class="main-modal__values--votes">').concat(i,'</span></td>\n                            </tr>\n                            <tr>\n                              <td class="main-modal__features">Popularity</td>\n                              <td class="main-modal__values">').concat(l.toFixed(1),'</td>\n                            </tr>\n                              <tr>\n                              <td class="main-modal__features">Original Title</td>\n                              <td class="main-modal__values main-modal__values--title">').concat(n,'</td>\n                            </tr>\n                              <tr>\n                              <td class="main-modal__features">Genre</td>\n                              <td class="main-modal__values main-modal__values--2">').concat((0,a.matchGenresByIdForModal)(s),'</td>\n                            </tr>\n                          </table>\n                           <div class="main-modal__description">\n                            <p class="main-modal__about">about</p>\n                            <p class="main-modal__text">').concat(c||"No overview found.",'</p>\n                          </div>\n                        <ul class="main-modal__buttons">\n                          <li>\n                            <button class="main-modal__buttons--watched">add to Watched</button>\n                          </li>\n                          <li>\n                            <button class="main-modal__buttons--queue">add to queue</button>\n                          </li>\n                        </ul>\n                      </div>')}}))}();
//# sourceMappingURL=library.31daa90a.js.map
