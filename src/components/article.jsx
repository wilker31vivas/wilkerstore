import { useState, useContext } from "react"
import { TiendaContext } from "../context/TiendaContext"
import { Link } from 'react-router-dom';

export default function Article(props) {
  const { addItems } = useContext(TiendaContext)

  const addItemCart = (props) => {
    addItems({
      title: props.title,
      price: props.price,
      img: props.img,
      codigo: props.codigo
    });
  }

  const truncateDescription = (description) => {
    if (description && description.length > 10) {
      return description.slice(0, 25) + " ...";
    }
    return description;
  };

  return (
    <div className='product-card' info={props.category}>
      <Link to={`/products/${props.codigo}`}>
        <img src={props.img[0]} alt={props.title} className="product-card-img" />
      </Link>
      <div className="product-info">
        <p className='product-title'>{props.title}</p>
        <p className="product-description">{truncateDescription(props.description)}
          <Link to={`/products/${props.codigo}`}>
            <span className="read-more">Read More</span>
          </Link>
        </p>
        <p className="product-categorie">{props.category}</p>
        <p className='product-price'>$ {props.price}</p>
        <figure className="product-cart" onClick={() => addItemCart(props)}>
          <img src="../icons/cart-plus-solid.svg"
            className='product-cart-img'
          />
          <p className="product-text">Add To Cart</p>
        </figure>
      </div>
    </div>
  )
}