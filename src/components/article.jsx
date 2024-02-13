import { useState, useContext } from "react"
import { TiendaContext } from "../context/TiendaContext"

export default function Article(props) {
    const { addItems } = useContext(TiendaContext)
  
    const addItemCart = (props) => {
      addItems({
        title: props.title,
        price: props.price,
        img: props.img,
      });
    }
  
  
    return (
      <div className='product-card' info={props.categorie}>
        <img src={props.img} alt={props.title} />
        <div className="product-info">
          <div className='product-title-price'>
            <p className='product-title'>{props.title}</p>
            <p className='product-price'>R$ {props.price}</p>
          </div>
          <figure>
            <img src="../img/cart-plus-solid.svg"
              className='cart-plus'
              onClick={() => addItemCart(props)} />
          </figure>
        </div>
      </div>
    )
  }