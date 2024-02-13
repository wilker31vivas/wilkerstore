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

    });

    const { items } = useContext(TiendaContext)

    return (
        <>
            <div className="cart-shopping">
                <div className='cart-shopping-container' ref={menuRef}>
                    <div className='cart-shopping-right-trigger' onClick={() => { setOpen(!open) }}>
                        <img src="./img/cart-shopping-solid.svg" alt="" className='cart-shopping-img' />
                        <div className='numitem'>{items.length}</div>
                    </div>

                    <div className={`cart-shopping-dropdown-menu ${open ? 'active' : 'inactive'}`} >
                        <h3 className='cart-shopping-title'>Meus Items:</h3>
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
    const { items } = useContext(TiendaContext)

    if (items.length === 0) {
        return <h1 className="cart-shopping-title">Ainda não tem items</h1>
    }

    return (
        <>
            {items.map((item, index) => (
                <CarItems item={item} key={item.id} id={item.id}></CarItems>
            ))}
            <Buy></Buy>
        </>
    )
}

function Buy() {
    const { items } = useContext(TiendaContext)

    const itemsPrice = items.map(function (item) {
        return item.price
    });

    const priceReduce = itemsPrice.reduce(function(item, index){
        return item + index
    })

    return (
        <>
            <div className="order">
                <p>
                    <span>Total</span>
                </p>
                <p>R$ {priceReduce.toFixed(2)}</p>
            </div>
            <button className="buy-button">
                Comprar
            </button>
        </>
    )
}






