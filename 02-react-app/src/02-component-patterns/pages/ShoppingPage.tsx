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
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCard>
    </div>
  )
}
