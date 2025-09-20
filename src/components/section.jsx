import Article from "./article"
import { itemsArray } from "../data/itemSection"; 
import { useEffect } from "react";

export default function Section() {

  return (
    <section className='main-container'>
      {itemsArray && itemsArray.map((item, index) => (
        <Article img={item.img} key={index} price={item.price} title={item.title} categorie={item.categorie} codigo={item.codigo} description={item.description}></Article>
      ))}
    </section>
  )
}