import { useContext, useState } from "react"
import { TiendaContext } from "../context/TiendaContext"

export default function CarItems({ item }) {
    const { eliminarItem } = useContext(TiendaContext);
    const {increase} = useContext(TiendaContext);
    const {decreased} = useContext(TiendaContext);

    return (
        <li className="myOrder-item">
            <img src={item.img[0]} className="myOrder-item-img" alt={item.title} />
            <p className='myOrder-item-title'>{item.title}</p>
            <p className='myOrder-item-price'>R$ {item.price}</p>
            <div className="myOrder-item-div">
                <h2 className="text-qtd-title">Amt:</h2>
                <button className="btn-qtd decreased" onClick={() => decreased(item)}>-</button>
                <p className="text-qtd">{item.qtd}</p>
                <button className="btn-qtd increase" onClick={() => increase(item)}>+</button>
            </div>
            <button className='myOrder-item-remove' onClick={() => eliminarItem(item.id)}>Delete</button>
        </li>
    )
}
