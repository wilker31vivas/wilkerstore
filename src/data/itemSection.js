export let itemsArray = [
  {
    title: "Red coat",
    price: 280,
    category: "Clothing",
  },
  {
    title: "Red pants",
    price: 356,
    category: "Clothing",
  },
  {
    title: "Blue baseball cap",
    price: 48,
    category: "Clothing",
  },
  {
    title: "Red baseball cap",
    price: 38,
    category: "Clothing",
  },
  {
    title: "Laptop",
    price: 1500,
    category: "Electronics",
  },
  {
    title: "Armchair",
    price: 568,
    category: "Furniture",
  },
  {
    title: "Golden boot",
    price: 456,
    category: "Clothing",
  },
  {
    title: "White boot",
    price: 400,
    category: "Clothing",
  },
  {
    title: "Electric bicycle",
    price: 2500,
    category: "Others",
  },
  {
    title: "Electric bicycle",
    price: 3000,
    category: "Others",
  },
  {
    title: "Orange-scented perfume",
    price: 99,
    category: "Others",
  },
  {
    title: "T-shirt",
    price: 49,
    category: "Clothing",
  },
  {
    title: "Jogger pants",
    price: 79,
    category: "Clothing",
  },
  {
    title: "Wide Leg pants",
    price: 120,
    category: "Clothing",
  },
  {
    title: "Red headphones",
    price: 120,
    category: "Electronics",
  },
  {
    title: "Phone",
    price: 1430,
    category: "Electronics",
  },
  {
    title: "Wooden table",
    price: 220,
    category: "Others",
  },
  {
    title: "Soccer shoes",
    price: 120,
    category: "Clothing",
  },
  {
    title: "Sandal",
    price: 99,
    category: "Clothing",
  },
  {
    title: "Suitcase",
    price: 300,
    category: "Others",
  },
  {
    title: "Crystal glass",
    price: 30,
    category: "Others",
  },
  {
    title: "Dark blue baseball cap",
    price: 48,
    category: "Clothing",
  },
  {
    title: "Game controller",
    price: 120,
    category: "Others",
  },
  {
    title: "Black and white headphones",
    price: 120,
    category: "Electronics",
  },
  {
    title: "Laptop",
    price: 990,
    category: "Electronics",
  },
  {
    title: "Smartwatch",
    price: 150,
    category: "Electronics",
  },
  {
    title: "Black sofa",
    price: 499,
    category: "Furniture",
  },
  {
    title: "Pink sunglasses",
    price: 79,
    category: "Others",
  },
  {
    title: "Transparent purse",
    price: 160,
    category: "Others",
  },
  {
    title: "Sandal",
    price: 70,
    category: "Clothing",
  }
];


itemsArray.forEach((item, index)=>{
  item.img = [`../img-products/${index + 1}.jpg`, `../img-products/${index + 1}.1.jpg`, `../img-products/${index + 1}.2.jpg`]
  item.codigo = `00${index + 1}`
  item.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales efficitur tempor. Pellentesque molestie diam."
})