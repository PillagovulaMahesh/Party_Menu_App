import React, { useState } from "react";
import { dishes } from "./data/mockDishes";
import Filters from "./components/Filters";
import DishList from "./components/DishList";
import IngredientModal from "./components/IngredientModal";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("MAIN COURSE");
  const [searchTerm, setSearchTerm] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [currentDish, setCurrentDish] = useState(null);

  const handleAddRemove = (id) => {
    setSelectedDishes((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  const filteredDishes = dishes.filter(
    (d) =>
      d.mealType === selectedCategory &&
      d.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!vegOnly || d.type === "VEG")
  );

  return (
    <div className="app-container">
      <h1>Party Menu Selection</h1>

      {/* Filters */}
      <Filters
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        vegOnly={vegOnly}
        onVegOnlyChange={setVegOnly}
      />

      {/* Dish List */}
      <DishList
        dishes={filteredDishes}
        selectedDishes={selectedDishes}
        onToggleSelect={handleAddRemove}
        onViewIngredients={setCurrentDish}
      />

      {/* Summary */}
      <div className="summary">
        <p>Total Selected: {selectedDishes.length}</p>
        <button className="continue-btn">Continue</button>
      </div>

      {/* Modal for Ingredients */}
      {currentDish && (
        <IngredientModal
          dish={currentDish}
          onClose={() => setCurrentDish(null)}
        />
      )}
    </div>
  );
}

export default App;
