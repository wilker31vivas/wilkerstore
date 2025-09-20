import { createContext, useState, useEffect } from "react"

export const TiendaContext = createContext()

export function TiendaContextProvider(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const datoGuardado = localStorage.getItem('miDatoGuardado');
    if (datoGuardado) {
      setItems(JSON.parse(datoGuardado));
    }
  }, [])

  function addItems(item) {
    const nuevoDato = [
      ...items,
      {
        title: item.title,
        price: item.price,
        img: item.img,
        id: items.length + 1,
        qtd: 1,
        codigo: item.codigo,
      },
    ];

    let found = false;
    const updatedItems = items.map((existingItem) => {
      if (existingItem.codigo === item.codigo) {
        existingItem.qtd++;
        found = true;
      }
      return existingItem;
    });

    if (!found) {
      updatedItems.push(nuevoDato[nuevoDato.length - 1]);
    }

    setItems(updatedItems);
    localStorage.setItem("miDatoGuardado", JSON.stringify(updatedItems));
  }

  function eliminarItem(itemId) {
    setItems(items.filter((item) => item.id !== itemId));
    localStorage.setItem('miDatoGuardado', JSON.stringify(items.filter((item) => item.id !== itemId)));
  }

  function increase(item) {
    addItems(item)
    console.log(item.qtd)
  }

  function decreased(item) {
    const nuevoDato = [
      ...items,
      {
        title: item.title,
        price: item.price,
        img: item.img,
        id: items.length + 1,
        qtd: 1,
        codigo: item.codigo,
      },
    ];

    let found = false;
    const updatedItems = items.map((existingItem) => {
      if (existingItem.codigo === item.codigo) {
        existingItem.qtd--;
        found = true;
      }
      return existingItem;
    });

    if (!found) {
      updatedItems.push(nuevoDato[nuevoDato.length - 1]);
    }

    setItems(updatedItems);
    localStorage.setItem("miDatoGuardado", JSON.stringify(updatedItems));
    console.log(item.qtd);
    if (item.qtd == 0) {
      eliminarItem(item.id)
    }
  }

  return (
    <TiendaContext.Provider value={{
      items,
      addItems,
      eliminarItem,
      increase,
      decreased
    }}>
      {props.children}
    </TiendaContext.Provider>
  )
}