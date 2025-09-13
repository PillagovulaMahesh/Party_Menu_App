import React from "react";

function DishCard({ dish, isSelected, onToggleSelect, onViewIngredients }) {
  return (
    <div className={`dish-card ${isSelected ? "selected" : ""}`}>
      <img src={dish.image} alt={dish.name} />
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <p><b>Type:</b> {dish.type}</p>

      <button onClick={() => onToggleSelect(dish.id)}>
        {isSelected ? "Remove" : "Add"}
      </button>

      <button onClick={() => onViewIngredients(dish)}>
        View Ingredients
      </button>
    </div>
  );
}

export default DishCard;
