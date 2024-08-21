const products = [
    { 
      id: '1',
      name: 'selva negra',
      price: 2000,
      category: 'torta',
      img:'https://www.paulinacocina.net/wp-content/uploads/2022/04/selva-negra-receta-1-800x534.jpg',
      stock: 5,
      description:'Torta de chocolate , crema y cereza'
    },
    {
        id: '2',
      name: 'bombones suizos( se vende por paquete x 12 unidades)',
      price: 1000,
      category: 'bombones',
      img:'https://acdn.mitiendanube.com/stores/001/122/764/products/h66_1-600x6001-2ed3f5536cb3e98cab16022802390080-1024-1024.jpg',
      stock: 30,
      description:'Bombones suizos de cholate negro y blanco'
    },
    {
      id: '3',
    name: 'Facturas(se vende por docena)',
    price: 1300,
    category: 'facturas',
    img:'https://pandonjuan.com.ar/wp-content/uploads/2023/03/factura-membrillo.jpg',
    stock: 30,
    description:'Facturas con crema y dulce de leche'
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
      }, 500)
  })
}

export const getProductById = (itemId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.find(prod => prod.id === itemId))
      }, 500)
  })
}


/*export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
    }, 500)
  })
}*/


