import{g as c}from"./utils-edaSswo0.js";function n(){const t=c("so-cart");if(!t||t.length===0){document.querySelector(".product-list").innerHTML=`
      <li style="text-align: center; padding: 2rem;"> Your cart is empty.</li>`;return}const a=t.map(r=>o(r));document.querySelector(".product-list").innerHTML=a.join(""),l(t)}function o(t){return`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${t.Image}"
      alt="${t.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${t.Name}</h2>
  </a>
  <p class="cart-card__color">${t.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: ${t.Quantity||1}</p>
  <p class="cart-card__price">$${t.FinalPrice}</p>
  <button class="remove-item" data-id="${t.Id}">Remove</button>
</li>`}function s(t){return t.reduce((r,e)=>r+e.FinalPrice*(e.Quantity||1),0).toFixed(2)}function l(t){const r=`
    <section class="cart-summary" style="text-align:right; margin: 2rem;">
      <p><strong>Subtotal:</strong> $${s(t)}</p>
    </section>
  `;document.querySelector(".products").insertAdjacentHTML("beforeend",r)}n();
