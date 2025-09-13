import React from "react";
import DishCard from "./DishCard";

function DishList({ dishes, selectedDishes, onToggleSelect, onViewIngredients }) {
  return (
    <div className="dish-list">
      {dishes.length === 0 ? (
        <p>No dishes found.</p>
      ) : (
        dishes.map(dish => (
          <DishCard
            key={dish.id}
            dish={dish}
            isSelected={selectedDishes.includes(dish.id)}
            onToggleSelect={onToggleSelect}
            onViewIngredients={onViewIngredients}
          />
        ))
      )}
    </div>
  );
}

export default DishList;
