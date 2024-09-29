const products = [
    { 
      id: '1',
      name: 'Selva Negra',
      price: 2000,
      category: 'torta selva negra',
      img:'https://www.paulinacocina.net/wp-content/uploads/2022/04/selva-negra-receta-1-800x534.jpg',
      stock: 5,
      description:'Torta de chocolate , crema y cereza'
    },
    {
        id: '2',
      name: 'Marquise',
      price: 1000,
      category: 'torta marquise',
      img:'https://truffle-assets.tastemadecontent.net/79143177-marquise-1920x1080-thumbnail.jpg',
      stock: 30,
      description:'Torta de chocolate con merengue'
    },
    {
      id: '3',
    name: 'Rogel',
    price: 1300,
    category: 'torta rogel',
    img:'https://www.clarin.com/img/2020/08/27/PKMxPZps0_1200x630__1.jpg',
    stock: 30,
    description:'torta de dulce de leche y merengue italiano'
  },
]

export const getProducts = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products)
      }, 500)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.filter(prod => prod.category === categoryId))
      }, 1500)
  })
}

export const getProductById = (itemId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.find(prod => prod.id === itemId))
      }, 500)
  })
}





