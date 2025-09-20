export let itemsArray = [
  {
    title: "Abrigo rojo",
    price: 280,
    categorie: "Ropa",
  },
  {
    title: "Pantalon rojo ",
    price: 356,
    categorie: "Ropa",
  },
  {
    title: "Gorra de beisbol azul",
    price: 48,
    categorie: "Ropa",
  },
  {
    title: "Gorra de beisbol roja",
    price: 38,
    categorie: "Ropa",
  },
  {
    title: "Laptop",
    price: 1500,
    categorie: "Electronicos",
  },
  {
    title: "Sillon",
    price: 568,
    categorie: "Muebles",
  },
  {
    title: "Bota dorada",
    price: 456,
    categorie: "Ropa",
  },
  {
    title: "Bota blanca",
    price: 400,
    categorie: "Ropa"
  },
  {
    title: "Bicicleta electronica",
    price: 2500,
    categorie: "Otros"
  },
  {
    title: "Bicicleta electonica",
    price: 3000,
    categorie: "Otros"
  },{
    title: "Perfume olor a naranja",
    price: 99,
    categorie: "Otros"
  },{
    title: "Camiseta",
    price: 49,
    categorie: "Ropa"
  },{
    title: "Patalon jogger",
    price: 79,
    categorie: "Ropa"
  },{
    title: "Pantalon Wide Leg",
    price: 120,
    categorie: "Ropa"
  },{
    title: "Audifonos rojo",
    price: 120,
    categorie: "Electronicos"
  },{
    title: "Telefono",
    price: 1430,
    categorie: "Electronicos"
  },{
    title: "Mesa de madera",
    price: 220,
    categorie: "Otros"
  },{
    title: "Tenis de futbol",
    price: 120,
    categorie: "Ropa"
  },{
    title: "Sandalia",
    price: 99,
    categorie: "Ropa"
  },{
    title: "Maleta",
    price: 300,
    categorie: "Otros"
  },{
    title: "Vazo de cristal",
    price: 30,
    categorie: "Otros"
  },{
    title: "Gorra de beisbol azul oscuro",
    price: 48,
    categorie: "Ropa"
  },{
    title: "Mando de consola",
    price: 120,
    categorie: "Otros"
  },{
    title: "Audifonos blanco con negro",
    price: 120,
    categorie: "Electronicos"
  },{
    title: "Laptop",
    price: 990,
    categorie: "Electronicos"
  },{
    title: "Reloj inteligente",
    price: 150,
    categorie: "Electronicos"
  },{
    title: "Sofa negro",
    price: 499,
    categorie: "Muebles"
  },{
    title: "Gafas de sol rosado",
    price: 79,
    categorie: "Otros"
  },{
    title: "Cartera transparente",
    price: 160,
    categorie: "Otros"
  },{
    title: "Sandalia",
    price: 70,
    categorie: "Ropa"
  }
  
];

itemsArray.forEach((item, index)=>{
  item.img = [`../img-products/${index + 1}.jpg`, `../img-products/${index + 1}.1.jpg`, `../img-products/${index + 1}.2.jpg`]
  item.codigo = `00${index + 1}`
  item.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales efficitur tempor. Pellentesque molestie diam."
})