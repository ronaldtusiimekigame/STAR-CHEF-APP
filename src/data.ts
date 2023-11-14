type Product = {
  id: number;
  title: string;
  desc?: string;
  cat: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

export type Products = Product[];

export const lunch: Products = [
  {
    id: 1,
    title: "BBQ Chicken Wings",
    cat: "Lunch Meals",
    desc: "Ignite your taste buds with a fiery combination of chicken delivering a kick with every bite.",
    img: "/temporary/lunch1.jpg",
    price: 24500,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "The Pizza Javas Special",
    cat: "Lunch Meals",
    desc: "Embark on a culinary journey with this Mediterranean-inspired creation.",
    img: "/temporary/lunch2.jpg",
    price: 32500,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Crispy Chicken Burger",
    cat: "Lunch Meals",
    desc: "A classic delight featuring crispy crust chicken",
    img: "/temporary/lunch3.jpg",
    price: 26500,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  }
];

export const breakfast: Products = [
  {
    id: 4,
    title: "Eggs with Steak and Home Fries",
    cat: "Breakfast",
    desc: "**And Black Tea Ignite your taste buds with a fiery combination of chicken delivering a kick with every bite.",
    img: "/temporary/breakfast1.jpg",
    price: 24500,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "The Chapati Combo",
    cat: "Breakfast",
    desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
    img: "/temporary/breakfast2.jpg",
    price: 32500,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Monte Cristo Sandwich Combo",
    cat: "Breakfast",
    desc: "A classic delight featuring crispy crust chicken",
    img: "/temporary/breakfast3.jpg",
    price: 26500,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  }
];

export const drinks: Products = [
  {
    id: 7,
    title: "Freshly Squeezed Juice",
    cat: "Drinks",
    desc: "Ignite your taste buds with a fiery combination of chicken delivering a kick with every bite.",
    img: "/temporary/drink1.jpg",
    price: 24500,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 8,
    title: "Lemonades",
    cat: "Drinks",
    desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
    img: "/temporary/drink2.jpg",
    price: 32500,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 9,
    title: "Coladas",
    cat: "Drinks",
    desc: "A classic delight featuring crispy crust chicken",
    img: "/temporary/drink3.jpg",
    price: 26500,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  }
];

export const singleProduct: Products = [
  {
    id: 1,
    title: "BBQ Chicken Wings",
    cat: "Lunch Meals",
    desc: "Ignite your taste buds with a fiery combination of chicken delivering a kick with every bite.",
    img: "/temporary/lunch1.jpg",
    price: 24500,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4000,
      },
      {
        title: "Large",
        additionalPrice: 6000,
      },
    ],
  },
  {
    id: 2,
    title: "The Pizza Javas Special",
    cat: "Lunch Meals",
    desc: "Embark on a culinary journey with this Mediterranean-inspired creation.",
    img: "/temporary/lunch2.jpg",
    price: 32500,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4000,
      },
      {
        title: "Large",
        additionalPrice: 6000,
      },
    ],
  },
  {
    id: 3,
    title: "Crispy Chicken Burger",
    cat: "Lunch Meals",
    desc: "A classic delight featuring crispy crust chicken",
    img: "/temporary/lunch3.jpg",
    price: 26500,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4000,
      },
      {
        title: "Large",
        additionalPrice: 6000,
      },
    ],
  },
  {
    id: 4,
    title: "Well-Done Eggs with Steak and Home Fries",
    cat: "Breakfast",
    desc: "Ignite your taste buds with a fiery combination of chicken delivering a kick with every bite.",
    img: "/temporary/breakfast1.jpg",
    price: 24500,
    options: [
      {
        title: "standard",
        additionalPrice: 0,
      },
      {
        title: "With Black-Tea",
        additionalPrice: 4000,
      },
      {
        title: "With Milk-Tea",
        additionalPrice: 6000,
      },
    ],
  },
  {
    id: 5,
    title: "The Chapati Combo",
    cat: "Breakfast",
    desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
    img: "/temporary/breakfast2.jpg",
    price: 32500,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4000,
      },
      {
        title: "Large",
        additionalPrice: 6000,
      },
    ],
  },
  {
    id: 6,
    title: "Monte Cristo Sandwich Combo",
    cat: "Breakfast",
    desc: "A classic delight featuring crispy crust chicken",
    img: "/temporary/breakfast3.jpg",
    price: 26500,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4000,
      },
      {
        title: "Large",
        additionalPrice: 6000,
      },
    ],
  },
  {
    id: 7,
    title: "Freshly Squeezed Juice",
    cat: "Drinks",
    desc: "Ignite your taste buds with a fiery combination of chicken delivering a kick with every bite.",
    img: "/temporary/drink1.jpg",
    price: 24500,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4000,
      },
      {
        title: "Large",
        additionalPrice: 6000,
      },
    ],
  },
  {
    id: 8,
    title: "Lemonades",
    cat: "Drinks",
    desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
    img: "/temporary/drink2.jpg",
    price: 32500,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4000,
      },
      {
        title: "Large",
        additionalPrice: 6000,
      },
    ],
  },
  {
    id: 9,
    title: "Coladas",
    cat: "Drinks",
    desc: "A classic delight featuring crispy crust chicken",
    img: "/temporary/drink3.jpg",
    price: 26500,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4000,
      },
      {
        title: "Large",
        additionalPrice: 6000,
      },
    ],
  }
];


type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "breakfast",
    title: "Breakfast",
    desc: "Indulge in fresh, delightful morning flavors that awaken your senses. Start your day with us!",
    img: "/temporary/breakfast.jpg",
    color: "#e6e8e1",
  },
  {
    id: 2,
    slug: "lunch",
    title: "Lunch Meals",
    desc: "Experience a midday feast with our diverse menu, offering savory bites and hearty salads.",
    img: "/temporary/lunch.jpg",
    color: "#e6e8e1",
  },
  {
    id: 3,
    slug: "drinks",
    title: "Drinks",
    desc: "Sip joy from our refreshing drink selections, crafted to elevate your dining experience.",
    img: "/temporary/drinks.jpg",
    color: "#e6e8e1",
  },
];
