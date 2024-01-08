import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components";
import { products } from "../data/products";
import "../styles/custom-styles.css";
import styles from "../styles/styles.module.css";

const product = products[0];

export const ShoppingPage = () => {
  

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <ProductCard 
        key={ product.id }
        product={ product }
        className="bg-dark"
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white text-bold" />
              <ProductButtons className="custom-buttons" style={{ display: 'flex', justifyContent: 'center' }} />

              <button onClick={reset}>Reset</button>
              <button onClick={ () => increaseBy(-2) }>-2</button>
              {
                !isMaxCountReached && <button onClick={ () => increaseBy(2) } className={`${ isMaxCountReached && styles.disabled }`}>+2</button>
              }
              <span>{ count } - { maxCount }</span>
            </>
          )
        }
      </ProductCard>
    </div>
  )
}
