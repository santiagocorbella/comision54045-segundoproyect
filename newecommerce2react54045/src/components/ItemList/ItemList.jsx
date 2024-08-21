import Item from "../Item/Item"

const ItemList =({ products }) => {
  return (
    <section>
      {
        products.map(product => {
          return <Item key={product.id} {...product}/>
        })
      }      
    </section>
  )
}

export default ItemList

/*import Item from "../Item/Item"

const ItemList = ({products}) => {
    return (
     <div style={{display: 'flex', FlexDirection:'column' }}>
      {
        products.map(product => {
          return <Item key={product.id} {...product}/>
        })
      }    
     </div>
    )
}  

export default ItemList*/ 



