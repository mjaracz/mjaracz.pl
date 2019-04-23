import * as React from "react";
import "./ItemCard.scss";

const ItemCard = ({title, id, url}) => {
  const className = `card__image card__image${id}`;
  return (
    <a href={url} >
      <div className="main__card">
        <div className={className}  />
        <p className="card__title">{title}</p>
      </div>
    </a>
  )
};

export default ItemCard;
