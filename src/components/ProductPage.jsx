import React, { useState } from "react";
import CategorySidebar from "./CategorySidebar";
import ProductLayout from "./ProductLayout";
import './ProductPage.css';

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("wristwatches");

  return (
    <div className="product-page" id="productPage">
      {/* Sidebar on the left */}
      <CategorySidebar 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />
      
      {/* Product Grid on the right */}
      <div className="product-content" id="productContent">
        <ProductLayout category={selectedCategory} />
      </div>
    </div>
  );
};

export default ProductPage;