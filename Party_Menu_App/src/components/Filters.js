import React from "react";

const categories = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

function Filters({ activeCategory, onCategoryChange, searchTerm, onSearchChange, vegOnly, onVegOnlyChange }) {
  return (
    <div className="filters">
      {/* Tabs for categories */}
      <div className="tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search box */}
      <input
        type="text"
        placeholder="Search dishes..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {/* Veg Only Filter */}
      <label>
        <input
          type="checkbox"
          checked={vegOnly}
          onChange={(e) => onVegOnlyChange(e.target.checked)}
        />
        Veg Only
      </label>
    </div>
  );
}

export default Filters;
