export const dishes = [
  // ---------- STARTERS ----------
  {
    id: 1,
    name: "Paneer Tikka",
    description: "Cubes of paneer marinated in spices and grilled to perfection.",
    image: "https://placehold.co/300x200?text=Paneer+Tikka",
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Yogurt", quantity: "100g" },
      { name: "Spices", quantity: "2 tbsp" }
    ]
  },
  {
    id: 2,
    name: "Chicken Tandoori",
    description: "Spicy marinated chicken roasted in tandoor.",
    image: "https://placehold.co/300x200?text=Chicken+Tandoori",
    mealType: "STARTER",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Yogurt", quantity: "150g" },
      { name: "Red Chili Powder", quantity: "2 tsp" }
    ]
  },

  // ---------- MAIN COURSE ----------
  {
    id: 3,
    name: "Kadhai Paneer",
    description: "Paneer cubes in spicy onion-tomato gravy with capsicum.",
    image: "https://placehold.co/300x200?text=Kadhai+Paneer",
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Onion", quantity: "2 large" },
      { name: "Capsicum", quantity: "1 large" },
      { name: "Tomato Puree", quantity: "1 cup" }
    ]
  },
  {
    id: 4,
    name: "Butter Chicken",
    description: "Chicken cooked in creamy tomato gravy with butter.",
    image: "https://placehold.co/300x200?text=Butter+Chicken",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Butter", quantity: "50g" },
      { name: "Cream", quantity: "100ml" },
      { name: "Tomato Puree", quantity: "1 cup" }
    ]
  },

  // ---------- DESSERT ----------
  {
    id: 5,
    name: "Gulab Jamun",
    description: "Sweet fried dumplings soaked in sugar syrup.",
    image: "https://placehold.co/300x200?text=Gulab+Jamun",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Khoya", quantity: "200g" },
      { name: "Sugar", quantity: "150g" },
      { name: "Cardamom", quantity: "2 pods" }
    ]
  },
  {
    id: 6,
    name: "Ice Cream Sundae",
    description: "Vanilla ice cream topped with chocolate syrup and nuts.",
    image: "https://placehold.co/300x200?text=Ice+Cream+Sundae",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Vanilla Ice Cream", quantity: "2 scoops" },
      { name: "Chocolate Syrup", quantity: "2 tbsp" },
      { name: "Nuts", quantity: "handful" }
    ]
  },

  // ---------- SIDES ----------
  {
    id: 7,
    name: "Butter Naan",
    description: "Soft Indian bread brushed with butter.",
    image: "https://placehold.co/300x200?text=Butter+Naan",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Flour", quantity: "200g" },
      { name: "Butter", quantity: "20g" },
      { name: "Yeast", quantity: "1 tsp" }
    ]
  },
  {
    id: 8,
    name: "Jeera Rice",
    description: "Steamed rice flavored with cumin seeds.",
    image: "https://placehold.co/300x200?text=Jeera+Rice",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Basmati Rice", quantity: "1 cup" },
      { name: "Cumin Seeds", quantity: "1 tsp" },
      { name: "Ghee", quantity: "1 tbsp" }
    ]
  }
];
