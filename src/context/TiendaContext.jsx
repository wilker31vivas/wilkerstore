import { createContext, useState, useEffect } from "react"
import { itemsCart } from "../data/itemsCart"

export const TiendaContext = createContext()

export function TiendaContextProvider(props) {
  const [items, setItems] = useState([]);

  function addItems(item) {
    setItems([...items, {
      title: item.title,
      price: item.price,
      img: item.img,
      id: items.length,
    }
    ])
  }

  function eliminarItem(itemId) {
    setItems(items.filter((item) => item.id !== itemId))
  }

  useEffect(() => {
    setItems(itemsCart)
  }, [])

  return (
    <TiendaContext.Provider value={{
      items,
      addItems,
      eliminarItem
    }}>
      {props.children}
    </TiendaContext.Provider>
  )
}