import Article from "./article"
import { itemsArray } from "../data/itemSection"; 


export default function Section(props) {

  return (
    <section className='main-container'>
      {itemsArray.map((item, index) => (
        <Article img={item.img} key={index} price={item.price} title={item.title} categorie={item.categorie}></Article>
      ))}
    </section>
  )
}