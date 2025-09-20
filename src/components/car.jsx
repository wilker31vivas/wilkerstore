import React, { useState, useEffect, useRef } from 'react';
import CarItems from "./carItems"
import { useContext } from "react"
import { TiendaContext } from "../context/TiendaContext"

export function Car({ num }) {
    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }

    }, []);

    const { items } = useContext(TiendaContext)


    function showImg() {
        const arrayImg = document.querySelectorAll(".img-collection")
        for (let i = 0; i < arrayImg.length; i++) {
            arrayImg[i].classList.toggle("hidden-img");
        }
        console.log(arrayImg)
    }

    return (
        <>
            <div className="cart-shopping">
                <div className='cart-shopping-container' ref={menuRef} >
                    <div className='cart-shopping-right-trigger' onClick={() => { setOpen(!open); showImg() }}>
                        <img src="../icons/cart-shopping-solid.svg" alt="" className={`cart-shopping-img ${items.length > 0 ? 'active' : 'inactive'}`}/>
                        <div className={`numitem ${items.length > 0 ? 'active' : 'inactive'}`}>{items.length}</div>
                    </div>

                    <div className={`cart-shopping-dropdown-menu ${open ? 'active' : 'inactive'}`} >
                        <h3 className='cart-shopping-title'>My Items:</h3>
                        <ul className='item-list'>
                            <ItemsList></ItemsList>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

function ItemsList() {
    const { items } = useContext(TiendaContext);

    if (items.length === 0) {
        return <h1 className="cart-shopping-title">No items yet</h1>
    }

    return (
        <>
            {items.map((item, index) => (
                <CarItems item={item} key={index + 1} id={item.id}></CarItems>
            ))}
            <Buy></Buy>
        </>
    )
}

function Buy() {
    const { items } = useContext(TiendaContext)

    const itemsPrice = items.map(item => item.price * item.qtd);

    const priceReduce = itemsPrice.reduce((total, price) => total + price, 0);

    return (
        <>
            <div className="order">
                <p>
                    <span>Total:</span>
                </p>
                <p>R$ {priceReduce.toFixed(2)}</p>
            </div>
            <button className="buy-button">
                Buy
            </button>
        </>
    )
}






