import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components";
import "../styles/custom-styles.css";

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: "./coffee-mug.png"
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        <ProductCard product={ product } className="bg-dark">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title="Café" className="text-white text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard 
          product={ product }
          className="bg-dark"
        >
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard 
          product={ product }
          style={{ backgroundColor: '#70D1F8' }}
        >
          <ProductImage style={{ backgroundColor: '#70D1F8' }} />
          <ProductTitle style={{ backgroundColor: '#70D1F8' }} /> 
          <ProductButtons style={{ backgroundColor: '#70D1F8' }} />
        </ProductCard>
      </div>
    </div>
  )
}
