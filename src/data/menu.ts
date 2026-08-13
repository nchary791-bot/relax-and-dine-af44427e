export type MenuItem = {
  name: string;
  price: number;
  description: string;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  blurb: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "protein-powerhouse",
    title: "Protein Powerhouse",
    blurb: "High-protein starters crafted for a nourishing, glowing start.",
    items: [
      {
        name: "Cottage Cheese & Avocado Open Toast",
        price: 439,
        description:
          "Creamy avocado meets high-protein cottage cheese on toasted sourdough. A nutrient-dense powerhouse for a glowing start!",
        tag: "Vegetarian",
      },
      {
        name: "Smoked Chicken & Egg Breakfast Wrap",
        price: 439,
        description:
          "The ultimate morning fuel! Savoury smoked chicken and fluffy eggs wrapped in a warm tortilla for a high-protein meal on the go.",
      },
    ],
  },
  {
    id: "all-day-breakfast",
    title: "All Day Breakfast",
    blurb: "Morning classics served all day, sweet or savoury.",
    items: [
      {
        name: "Cinnamon French Toast With Cream & Fruits",
        price: 329,
        description:
          "Delicious bread soaked in eggs and milk, pan seared and drizzled with maple syrup, fruits and cream.",
      },
      {
        name: "Classic Waffles With Cream & Fresh Fruits",
        price: 339,
        description: "Waffles served with cream and fresh fruits.",
      },
      {
        name: "Nutella Pancakes",
        price: 369,
        description: "Nutella pancakes served with pancake syrup.",
      },
      {
        name: "Waffles With Banana & Caramel Sauce",
        price: 349,
        description: "Waffles served with banana and caramel sauce.",
      },
      {
        name: "Cheese Omlette",
        price: 269,
        description: "Served with bread butter and jam.",
      },
      {
        name: "Masala Omlette",
        price: 249,
        description: "Served with bread butter and jam.",
      },
      {
        name: "American Breakfast",
        price: 449,
        description:
          "Sausages, pancakes, maple syrup, eggs, bacon, tomato, hash brown, bread, butter n jam.",
      },
      {
        name: "Bacon Cheese Omlette",
        price: 329,
        description: "Served with bread butter and jam.",
      },
      {
        name: "Chicken Cheese Omlette",
        price: 309,
        description: "Served with bread butter and jam.",
      },
      {
        name: "English Breakfast",
        price: 429,
        description:
          "Sausages, baked beans, sunny side eggs, bacon, tomato, hash browns, bread butter, jam.",
      },
    ],
  },
  {
    id: "salads-soups",
    title: "Salads & Soups",
    blurb: "Fresh bowls and comforting soups for lighter moments.",
    items: [
      {
        name: "Ceaser Salad",
        price: 339,
        description: "Iceberg lettuce, parmesan dressing, crouton.",
        tag: "Vegetarian",
      },
      {
        name: "Mexican Salad",
        price: 309,
        description:
          "American corn, lettuce, jalapenos, cilantro, onion & dressing.",
        tag: "Vegetarian",
      },
      {
        name: "Grilled Chicken Salad",
        price: 339,
        description:
          "Grilled chicken, lettuce, parmesan dressing, broccoli, herbs.",
      },
    ],
  },
  {
    id: "signature-sushi",
    title: "Signature Sushi's",
    blurb: "Artfully rolled, baked, and drizzled with bold flavours.",
    items: [
      {
        name: "Baked Cheese Shrimp Tempura",
        price: 599,
        description:
          "Crunchy shrimp tempura and velvety cream cheese, topped with melted Japanese cheese and spicy crab salad, then oven-baked until golden. Finished with a sweet unagi sauce drizzle.",
      },
      {
        name: "Crunchy Teriyaki Sushi",
        price: 599,
        description:
          "Tender teriyaki chicken and cooling cucumber balanced with rich cream cheese, finished with spicy mayo and golden toasted crunch.",
      },
      {
        name: "Mango Hotdog Sushi",
        price: 549,
        description:
          "Fresh mango slices meet crisp cucumber and spicy jalapeño, wrapped in seasoned rice and nori, topped with tangy mango-puree reduction and a dash of wasabi dust.",
        tag: "Vegetarian",
      },
    ],
  },
  {
    id: "nigiri-sushi",
    title: "Nigiri Sushi",
    blurb: "Classic hand-pressed bites over seasoned sushi rice.",
    items: [
      {
        name: "Avacado Nigiri",
        price: 539,
        description:
          "Sushi rice, sliced avocado, ginger pickle, Kikoman soya sauce.",
        tag: "Vegetarian",
      },
      {
        name: "Salmon Nigiri",
        price: 629,
        description:
          "Sushi rice, salmon, ginger pickle, Kikoman soya sauce.",
      },
    ],
  },
  {
    id: "rice-noodles",
    title: "Main Course Rice & Noodles",
    blurb: "Wok-tossed noodles and fragrant curries from across Asia.",
    items: [
      {
        name: "Chicken Thai Curry (Green)",
        price: 429,
        description: "Served with basmathi rice.",
      },
      {
        name: "Chicken Thai Curry (Red)",
        price: 429,
        description: "Served with basmathi rice.",
      },
      {
        name: "Hakka Noodles",
        price: 409,
        description:
          "Veggie, garlic, celery, sprouts, oyster, siricha, soya, ketchup, sesame oil.",
      },
      {
        name: "Mongolian Fried Rice",
        price: 409,
        description: "",
        tag: "Vegetarian",
      },
      {
        name: "Veg Hakka Noodles [Online]",
        price: 369,
        description: "Wok toss noodles, soya sauce, veggies.",
        tag: "Vegetarian",
      },
      {
        name: "Veg Thai Curry (Green) [Online]",
        price: 399,
        description: "Served with basmathi rice.",
        tag: "Vegetarian",
      },
      {
        name: "Veg Thai Curry (Red) [Online]",
        price: 399,
        description: "Served with basmathi rice.",
        tag: "Vegetarian",
      },
      {
        name: "Nasi Goreng",
        price: 429,
        description:
          "Flavour fried rice, chicken satay, prawns crackers, sunny side egg.",
      },
      {
        name: "Thai Basil Fried Rice",
        price: 409,
        description:
          "Garlic, basil, bird's eye chilli, oyster, fish sauce, butter, honey.",
      },
    ],
  },
  {
    id: "bowl-combos",
    title: "Rice Bowl & Noodle Bowl Combos",
    blurb: "Hearty bowls built for a complete, satisfying meal.",
    items: [
      {
        name: "Chicken Hunan Rice Bowl",
        price: 429,
        description: "Deep fried chicken, dried chilli garlic oyster and siricha.",
      },
      {
        name: "Chicken Kung Pao & Rice Bowl",
        price: 439,
        description:
          "Vegetables / chicken mix in soya base sauce with the flavour of honey, manchow fried rice.",
      },
      {
        name: "Butter Chicken Rice Bowl",
        price: 439,
        description: "Butter kheema chicken and rice.",
      },
      {
        name: "Butter Paneer Tikka Rice Bowl",
        price: 419,
        description: "Indian style paneer masala and rice.",
        tag: "Vegetarian",
      },
      {
        name: "Pepper Mushroom Noodle Bowl",
        price: 389,
        description: "Fried mushroom pepper sauce, soft noodles / veg fried rice.",
        tag: "Vegetarian",
      },
      {
        name: "Pepper Mushroom Rice Bowl",
        price: 389,
        description: "Fried mushroom pepper sauce, soft noodles / veg fried rice.",
        tag: "Vegetarian",
      },
      {
        name: "Spicy Chicken Tikka Rice Bowl",
        price: 439,
        description: "Indian style curry and rice.",
      },
      {
        name: "Veg Hunan Rice Bowl",
        price: 409,
        description:
          "Mix vegetables, dry chilli, garlic, oyster sauce and siricha.",
        tag: "Vegetarian",
      },
      {
        name: "Veg Kung Pao & Rice Bowl",
        price: 429,
        description:
          "Vegetables mix in soya base sauce with the flavour of honey, manchow fried rice.",
        tag: "Vegetarian",
      },
    ],
  },
  {
    id: "hot-coffee",
    title: "Hot Coffee",
    blurb: "Classic espresso-based coffees, steamed and served warm.",
    items: [
      {
        name: "Cafe Latte",
        price: 249,
        description:
          "Steamed milk and a thin layer of frothed milk topped on double short espresso.",
        tag: "Vegetarian",
      },
      {
        name: "Cappuccino (Double Shot)",
        price: 239,
        description:
          "The perfect balance of espresso freshly pulled 60ml short layered with steamed thick and rich foam of milk.",
        tag: "Vegetarian",
      },
      {
        name: "Cappuccino (Single Shot)",
        price: 199,
        description:
          "The perfect balance of espresso freshly pulled 30ml short layered with steamed thick and rich foam of milk.",
        tag: "Vegetarian",
      },
      {
        name: "Flat White",
        price: 259,
        description: "Steamed micro foam of milk poured over double short espresso.",
        tag: "Vegetarian",
      },
      {
        name: "Hot Chocolate",
        price: 239,
        description: "Cocoa and dark chocolate frothed with milk.",
        tag: "Vegetarian",
      },
      {
        name: "Irish Coffee",
        price: 279,
        description:
          "Steamed milk and a thin layer of frothed milk topped on double short espresso, sweetened with Irish cream syrup.",
        tag: "Vegetarian",
      },
    ],
  },
  {
    id: "coffee-on-the-rocks",
    title: "Coffee On The Rocks",
    blurb: "Chilled espresso creations poured over ice.",
    items: [
      {
        name: "Cafe Frappe",
        price: 259,
        description:
          "This is it double shot espresso blended with scoop of ice cream and some ice.",
        tag: "Vegetarian",
      },
      {
        name: "Cranberry Iced Coffee",
        price: 259,
        description:
          "This is it special double shot espresso topped on cranberry juice, served on the rock.",
        tag: "Vegetarian",
      },
      {
        name: "Iced Americano",
        price: 239,
        description:
          "Freshly pulled double shot espresso combined with RO water, served on the rock.",
        tag: "Vegetarian",
      },
      {
        name: "Iced Mocha",
        price: 249,
        description:
          "Double shot espresso coffee concentrate and dark chocolate sauce topped with cold milk served on the rocks.",
        tag: "Vegetarian",
      },
      {
        name: "Mocha Frappe",
        price: 289,
        description:
          "This is it double shot espresso and dark chocolate blended with scoops of ice cream and some ice.",
        tag: "Vegetarian",
      },
      {
        name: "Vietnamese Iced Latte",
        price: 289,
        description:
          "This is it double shot espresso with sweetened condensed milk, served in the rock.",
        tag: "Vegetarian",
      },
    ],
  },
  {
    id: "specials-cold-coffee",
    title: "Specials Cold Coffee",
    blurb: "Indulgent cold coffee signatures, blended with ice cream.",
    items: [
      {
        name: "This Is It Cold Coffee",
        price: 319,
        description: "Double shot espresso blended with scoops of vanilla ice cream.",
        tag: "Vegetarian",
      },
      {
        name: "This Is It Ferrero Rocher Cold Coffee",
        price: 339,
        description:
          "Double shot espresso blended with Ferrero Rocher and scoops of vanilla ice cream.",
        tag: "Vegetarian",
      },
      {
        name: "This Is It Kit Kat Cold Coffee",
        price: 319,
        description:
          "Double shot espresso blended with kit kat and scoops of vanilla ice cream.",
        tag: "Vegetarian",
      },
      {
        name: "This Is It Lotus Biscoff Cold Coffee",
        price: 339,
        description:
          "Scoops of vanilla ice cream blended with double shot espresso and lotus Biscoff caramelized.",
        tag: "Vegetarian",
      },
      {
        name: "Mocha Cold Coffee",
        price: 319,
        description: "Chocolate cold coffee.",
        tag: "Vegetarian",
      },
      {
        name: "Nutella Cold Coffee",
        price: 339,
        description:
          "Double shot espresso blended with Nutella sauce and scoops of ice cream.",
        tag: "Vegetarian",
      },
      {
        name: "This Is It Oreo Cold Coffee",
        price: 329,
        description:
          "Double shot espresso blended with Oreo biscuits and scoops of vanilla ice cream.",
        tag: "Vegetarian",
      },
    ],
  },
  {
    id: "milkshakes",
    title: "Milkshakes",
    blurb: "Thick, creamy shakes blended with scoops of vanilla ice cream.",
    items: [
      {
        name: "Chocolate Milkshake",
        price: 259,
        description:
          "Dark chocolate sauce blended with scoops of vanilla ice cream served as a milkshake.",
        tag: "Vegetarian",
      },
      {
        name: "Ferrero Rocher Milkshake",
        price: 339,
        description:
          "Ferrero Rocher chocolate blended with scoops of vanilla ice cream served as a milkshake.",
        tag: "Vegetarian",
      },
      {
        name: "Kit Kat Milkshake",
        price: 319,
        description:
          "Kit kat chocolate blended with scoops of vanilla ice cream served as a milkshake.",
        tag: "Vegetarian",
      },
      {
        name: "Mango Milkshake",
        price: 319,
        description:
          "Mango crush blended with scoops of vanilla ice cream served as a milkshake.",
        tag: "Vegetarian",
      },
      {
        name: "Nutella Milkshakes",
        price: 339,
        description: "",
        tag: "Vegetarian",
      },
      {
        name: "Oreo Milkshake",
        price: 319,
        description:
          "Oreo biscuits blended with scoops of vanilla ice cream served as a milkshake.",
        tag: "Vegetarian",
      },
      {
        name: "Peanut Butter Milkshake",
        price: 319,
        description:
          "Crunchy peanut butter sauce blended with scoops of vanilla ice cream served as a milkshake.",
        tag: "Vegetarian",
      },
      {
        name: "Strawberry Milkshake",
        price: 319,
        description:
          "Strawberry crush blended with scoops of vanilla ice cream served as a milkshake.",
        tag: "Vegetarian",
      },
    ],
  },
  {
    id: "add-ons",
    title: "Add Ons",
    blurb: "Extra sides to round out your meal.",
    items: [
      {
        name: "Broccoli, Zuccini, Carrot, Babycorn, Beans",
        price: 289,
        description: "",
        tag: "Vegetarian",
      },
      { name: "Plain Boiled Chicken", price: 239, description: "" },
      { name: "Sausages", price: 269, description: "" },
    ],
  },
  {
    id: "hydration-booster",
    title: "The Hydration Booster",
    blurb: "Refreshing, replenishing drinks to cool down and recharge.",
    items: [
      {
        name: "Cucumber & Celery \"Cool-Down\"",
        price: 249,
        description:
          "Cucumber juice and celery juice with a hint of lime and cracked black pepper.",
        tag: "Vegetarian",
      },
      {
        name: "Himalayan Pink Salt Lemonade",
        price: 249,
        description:
          "Freshly squeezed lemon, raw cane sugar, and hand-harvested pink salt.",
        tag: "Vegetarian",
      },
      {
        name: "The Signature Switchel",
        price: 249,
        description:
          "A centuries-old recovery tonic. Fresh ginger juice, organic apple cider vinegar, and local honey topped with sparkling water and pinch of pink salt.",
        tag: "Vegetarian",
      },
    ],
  },
];
