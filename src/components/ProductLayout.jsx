import React from "react";
import products from "../data/ProductData";
import './ProductLayout.css';

const ProductLayout = ({ category, addToCart }) => {
  const categoryProducts = products[category] || [];

  return (
    <div className="product-layout" id="productLayout">
      <h2 className="category-title">
        {category} 
        <span className="category-count">
          Found: {categoryProducts.length} Products
        </span>
      </h2>

      {/* Product Grid */}
      <div className="product-grid" id="productGrid">
        {categoryProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
          >
            {/* Badges */}
            {product.isNew && (
              <span className="badge badge-new">
                New
              </span>
            )}
            {product.discount && (
              <span className="badge badge-discount">
                -{product.discount}%
              </span>
            )}

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            {/* Product Info */}
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">
                ${product.price}
                {product.oldPrice && (
                  <span className="product-old-price">
                    ${product.oldPrice}
                  </span>
                )}
              </p>
            </div>

            {/* Add to Cart Button */}
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductLayout;