import React from "react";
import products from "../data/ProductData";
import './CategorySidebar.css';

const categories = Object.keys(products).map((category) => ({
  name: category.charAt(0).toUpperCase() + category.slice(1),
  count: products[category].length,
}));

const CategorySidebar = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-sidebar" id="categorySidebar">
      <h2 className="sidebar-title">Categories</h2>
      <button className="reset-filters-btn" id="resetFilters">
        Reset All Filters
      </button>

      {/* Shopping Category */}
      <h3 className="section-title">Category:</h3>
      <ul className="category-list">
        {categories.map((category) => (
          <li
            key={category.name}
            className={`category-item ${
              selectedCategory === category.name.toLowerCase() 
                ? "category-item-selected" 
                : ""
            }`}
            onClick={() => onSelectCategory(category.name.toLowerCase())}
          >
            {category.name} ({category.count})
          </li>
        ))}
      </ul>

      {/* Price */}
      <h3 className="section-title">Price:</h3>
      <div className="price-filter">
        <input 
          type="range" 
          min="0" 
          max="5100" 
          className="price-range" 
          id="priceRange" 
        />
        <span className="price-range-text">$2.00 - $5,100.00</span>
      </div>

      {/* Sort By */}
      <h3 className="section-title">Sort By:</h3>
      <select className="sort-select" id="sortSelect">
        <option>Price High to Low</option>
        <option>Price Low to High</option>
      </select>
    </div>
  );
};

export default CategorySidebar;