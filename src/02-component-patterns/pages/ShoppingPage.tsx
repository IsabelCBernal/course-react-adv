import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";

const product = {
  id: "1",
  title: "Coffee Mug",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {/* METODO 1 */}
        <ProductCard product={product}>
          <ProductCard.Image img={product.img} />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        {/* METODO 2 */}
        <ProductCard product={product}>
          <ProductImage img={product.img} />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
