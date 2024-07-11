import "./styles.css";
import { availableProducts } from "./data";
import { useState } from "react";

function ProductList() {
  let [selectedProducts, setSelectedProducts] = useState([]);
  console.log(selectedProducts);
  const products = availableProducts.map((avalablPproduct) => {
    let onProductClick = () => {
      setSelectedProducts([...selectedProducts, avalablPproduct]);
    };

    return (
      <div key={avalablPproduct.id}>
        <button type="button" onClick={onProductClick}>
          {avalablPproduct.name}
        </button>
      </div>
    );
  });

  return (
    <div className="productList-contyner">
      <div className="selected_products_contyner">
        <h1>Selected products</h1>
        <div></div>
      </div>
      <div className="avalable_products_contyner">
        <h1>Avalable products</h1>
        <div>{products}</div>
      </div>
    </div>
  );
}

export default ProductList;
