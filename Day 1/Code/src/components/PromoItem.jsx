import React from "react";

function PromoItem(props) {
  return (
    <div className="promo-item">
      <img className="promo-image" src={props.promo_img}></img>
      <h4>{props.promo_name}</h4>
      <ul>
        <li class="promo-list-item">{props.promo_text_1}</li>
        <li class="promo-list-item">{props.promo_text_2}</li>
        <li class="promo-list-item">{props.promo_text_3}</li>
      </ul>
    </div>
  );
}

export default PromoItem;
