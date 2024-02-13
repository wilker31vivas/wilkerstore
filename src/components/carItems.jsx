import { useContext } from "react"
import { TiendaContext } from "../context/TiendaContext"

export default function CarItems({item}) {
    const { eliminarItem } = useContext(TiendaContext)  

    return (
        <li className="myOrder-item">
            <img src={item.img} className="myOrder-item-img" alt={item.title} />
            <p className='myOrder-item-title'>{item.title}</p>
            <p className='myOrder-item-price'>R$ {item.price}</p>
            <button className='myOrder-item-remove' onClick={() => eliminarItem(item.id)}>Excluir</button>
        </li>
    )
}
