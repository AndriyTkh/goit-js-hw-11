import{S as d,i as c}from"./assets/vendor-3fe00192.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function p(i){const s="https://pixabay.com/api/?"+new URLSearchParams({key:"43812244-bec36bb850e93fe60ae9591d0",q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}).toString(),t=document.querySelector(".loader");return t.hidden=!1,fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return setTimeout(()=>{t.hidden=!0},1e3),e.json()})}function f(i){const o=document.querySelector(".gallery");let s="";i.forEach(t=>{s+=`<li>
        <div class = "img-container">
            <a class="gallery-link" href="${t.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${t.webformatURL}"
                    alt="${t.tags}"
                />
            </a>
        </div>
        
        <ul class="description-list">
          <li>
            <span class="list-title">Likes</span>
            <p class="list-text">${t.likes}</p>
          </li>
          <li>
            <span class="list-title">Views</span>
            <p class="list-text">${t.views}</p>
          </li>
          <li>
            <span class="list-title">Comments</span>
            <p class="list-text">${t.comments}</p>
          </li>
          <li>
            <span class="list-title">Downloads</span>
            <p class="list-text">${t.downloads}</p>
          </li>
        </ul>
      </li>`}),o.innerHTML=s}const u=document.querySelector(".search-form");let l,n=new d(".gallery-link");n.options.captionDelay=250;n.options.captionsData="alt";u.addEventListener("submit",i=>{if(i.preventDefault(),l=u.elements.userSearch.value,!l){c.error({theme:"dark",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"red",progressBarColor:"#ff91a4",message:"No input provided",title:"Error",timeout:2e3});return}p(l).then(s=>{const t=s.hits;if(t.length==0){c.error({theme:"dark",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"red",progressBarColor:"#ff91a4",message:"Sorry, there are no images matching your search query. Please try again!",title:"Error",timeout:2e3});return}f(t),n.refresh()}).catch(s=>{console.error(s)})});
//# sourceMappingURL=commonHelpers.js.map
