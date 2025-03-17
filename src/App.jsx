import React from "react";
import "./App.css";
import CategorySidebar from "./components/CategorySidebar";
import ProductLayout from "./components/ProductLayout";
import CartOverlay from "./components/CartOverlay";

function App() {
  const [cart, setCart] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState("jewelry");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app-container">

      {/* Main Content */}
      <div className="main-content">
        {/* Category Sidebar */}
        <CategorySidebar 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory} 
        />

        {/* Product Grid */}
        <div className="product-section">
          <ProductLayout 
            category={selectedCategory} 
            addToCart={addToCart} 
          />
        </div>

        {/* Cart Overlay */}
        <CartOverlay cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}

export default App;