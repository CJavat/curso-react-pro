import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components";
import "../styles/custom-styles.css";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
  const { products, shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {
          products.map( ( product ) => (
            <ProductCard 
              key={ product.id }
              product={ product }
              className="bg-dark"
              onChange={ onProductCountChange }
              value={ shoppingCart[product.id]?.count || 0 }
            >
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white text-bold" />
              <ProductButtons className="custom-buttons" style={{ display: 'flex', justifyContent: 'center' }} />
            </ProductCard>
          ))
        }
      </div>

      <div className="shopping-cart">
        {
          Object.entries( shoppingCart ).map( ([ key, product ]) => (
            <ProductCard 
              key={ key }
              product={ product }
              className="bg-dark"
              style={{ width: '100px' }}
              onChange={ onProductCountChange }
              value={ product.count }
            >
              <ProductImage className="custom-image" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        }
      </div>
    </div>
  )
}
