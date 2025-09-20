import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { itemsArray } from "../data/itemSection";
import NavBar from './navbar'
import { TiendaContext } from "../context/TiendaContext"


export default function Product({ id }) {
    const { addItems } = useContext(TiendaContext)
    const [img, setImg] = useState(`${itemsArray[id].img[0]}`)

    const addItemCart = () => {
        addItems({
            title: itemsArray[id].title,
            price: itemsArray[id].price,
            img: itemsArray[id].img,
            codigo: itemsArray[id].codigo
        });
    };

    function changeImg(e) {
        setImg(e.target.src)
        const arrayImg = document.getElementsByTagName("img")
        for (let i = 1; i < arrayImg.length; i++) {
            arrayImg[i].classList.remove("show-img");
        }
        e.target.classList.add("show-img")
    }

    return (
        <>
            <NavBar status={false}></NavBar>
            <div className='product-container'>
                <Link to="/" className='index-button'>Back</Link>
                <div className='product-box'>
                    {itemsArray[id] && (
                        <>
                            <img className='product-box-img' src={img} alt={itemsArray[id].title}></img>
                            <div className='product-box-info__img'>
                                {itemsArray[id].img.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={itemsArray[id].title}
                                        onClick={changeImg}
                                        className={index === 0 ? 'show-img img-collection' : 'img-collection'}
                                    />
                                ))}
                            </div>
                            <div className='product-box-info'>
                                <h2>{itemsArray[id].title}</h2>
                                <p className='product-box-categorie'>{itemsArray[id].category}</p>
                                <p className='product-box-description'>{itemsArray[id].description}</p>
                                <div className='price-cart'>
                                    <p className='product-box-price'>Precio: <span>${itemsArray[id].price}</span></p>
                                    <figure className="product-cart-2 product-cart" onClick={addItemCart}>
                                        <img src="../icons/cart-plus-solid.svg"
                                            className='product-cart-img'
                                        />
                                        <p className="product-text">Add To Cart</p>
                                    </figure>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}


