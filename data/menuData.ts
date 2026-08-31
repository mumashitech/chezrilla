export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  popular?: boolean;
  sizes?: { name: string; price: number }[];
  variants?: { name: string; price: number }[];
}

export const categories = [
  "All",
  "Appetizers",
  "Rolls & Wraps",
  "Sandwiches",
  "Burgers",
  "Pastas",
  "Steaks",
  "Chinese & Thai",
  "Pizza",
  "Beverages",
] as const;

export type Category = (typeof categories)[number];

export const menuItems: MenuItem[] = [
  // ============== APPETIZERS ==============
  {
    id: "app-01",
    name: "Supreme Nachos",
    category: "Appetizers",
    price: 499,
    description:
      "Loaded nachos topped with seasoned chicken, jalapeños, melted cheese, and tangy salsa.",
    image: "/images/food/supreme-nachos.jpg",
    popular: true,
  },
  {
    id: "app-02",
    name: "Golden Nuggets",
    category: "Appetizers",
    price: 449,
    description:
      "Crispy golden chicken nuggets served with our signature dipping sauce.",
    image: "/images/food/golden-nuggets.jpg",
    variants: [{ name: "8 Pcs", price: 449 }],
  },
  {
    id: "app-03",
    name: "Arabian Nuggets",
    category: "Appetizers",
    price: 599,
    description:
      "Middle-Eastern spiced nuggets with a crunchy exterior and juicy interior.",
    image: "/images/food/arabian-nuggets.jpg",
    variants: [{ name: "8 Pcs", price: 599 }],
  },
  {
    id: "app-04",
    name: "Chicken Tempura",
    category: "Appetizers",
    price: 499,
    description:
      "Light and crispy Japanese-style battered chicken strips.",
    image: "/images/food/chicken-tempura.jpg",
    variants: [{ name: "5 Pcs", price: 499 }],
  },
  {
    id: "app-05",
    name: "Dynamite Chicken",
    category: "Appetizers",
    price: 549,
    description:
      "Explosive crispy chicken bites tossed in a fiery dynamite sauce.",
    image: "/images/food/dynamite-chicken.jpg",
    popular: true,
  },
  {
    id: "app-06",
    name: "BBQ Wings",
    category: "Appetizers",
    price: 399,
    description:
      "Smoky barbecue-glazed chicken wings, grilled to perfection.",
    image: "/images/food/bbq-wings.jpg",
  },
  {
    id: "app-07",
    name: "Crispy Wings",
    category: "Appetizers",
    price: 350,
    description:
      "Classic crispy fried chicken wings with a golden crunch.",
    image: "/images/food/crispy-wings.jpg",
    popular: true,
    variants: [
      { name: "6 Pcs", price: 350 },
      { name: "12 Pcs", price: 620 },
    ],
  },
  {
    id: "app-08",
    name: "Spicy Buffalo Wings",
    category: "Appetizers",
    price: 590,
    description:
      "Hot and tangy buffalo-sauced wings with a serious kick.",
    image: "/images/food/buffalo-wings.jpg",
  },
  {
    id: "app-09",
    name: "French Fries",
    category: "Appetizers",
    price: 350,
    description:
      "Golden crispy fries seasoned with our special blend of spices.",
    image: "/images/food/french-fries.jpg",
  },
  {
    id: "app-10",
    name: "Italian Loaded Fries",
    category: "Appetizers",
    price: 499,
    description:
      "Fries loaded with Italian herbs, melted cheese, and savory toppings.",
    image: "/images/food/italian-loaded-fries.jpg",
  },
  {
    id: "app-11",
    name: "Pizza Fries",
    category: "Appetizers",
    price: 499,
    description:
      "Crispy fries smothered in pizza sauce, mozzarella, and toppings.",
    image: "/images/food/pizza-fries.jpg",
  },

  // ============== ROLLS & WRAPS ==============
  {
    id: "rw-01",
    name: "Chicken Chimichanga",
    category: "Rolls & Wraps",
    price: 499,
    description:
      "Deep-fried flour tortilla packed with seasoned chicken and melted cheese.",
    image: "/images/food/chimichanga.jpg",
  },
  {
    id: "rw-02",
    name: "Crisp Wrap",
    category: "Rolls & Wraps",
    price: 450,
    description:
      "Crunchy tortilla wrap filled with crispy chicken strips and fresh veggies.",
    image: "/images/food/crisp-wrap.jpg",
  },
  {
    id: "rw-03",
    name: "Chicken Burrito",
    category: "Rolls & Wraps",
    price: 399,
    description:
      "Hearty burrito stuffed with seasoned chicken, rice, beans, and cheese.",
    image: "/images/food/chicken-burrito.jpg",
  },
  {
    id: "rw-04",
    name: "Traditional Malai Boti Wrap",
    category: "Rolls & Wraps",
    price: 449,
    description:
      "Tender malai boti pieces wrapped in a soft paratha with creamy sauce.",
    image: "/images/food/malai-boti-wrap.jpg",
  },
  {
    id: "rw-05",
    name: "Behari Roll",
    category: "Rolls & Wraps",
    price: 499,
    description:
      "Succulent behari kebab strips rolled in a fresh paratha with chutney.",
    image: "/images/food/behari-roll.jpg",
  },
  {
    id: "rw-06",
    name: "Mexicana Beef Wrap",
    category: "Rolls & Wraps",
    price: 499,
    description:
      "Spiced beef with Mexican-style toppings wrapped in a warm tortilla.",
    image: "/images/food/mexicana-beef-wrap.jpg",
  },

  // ============== SANDWICHES ==============
  {
    id: "sw-01",
    name: "Club Sandwich",
    category: "Sandwiches",
    price: 499,
    description:
      "Triple-layered sandwich with chicken, egg, lettuce, and mayo.",
    image: "/images/food/club-sandwich.jpg",
  },
  {
    id: "sw-02",
    name: "Fried Chicken Sandwich",
    category: "Sandwiches",
    price: 449,
    description:
      "Crispy fried chicken fillet in a soft bun with coleslaw and sauce.",
    image: "/images/food/fried-chicken-sandwich.jpg",
  },
  {
    id: "sw-03",
    name: "Roasted Beef Sandwich",
    category: "Sandwiches",
    price: 599,
    description:
      "Tender roasted beef slices with caramelized onions and mustard.",
    image: "/images/food/roasted-beef-sandwich.jpg",
  },
  {
    id: "sw-04",
    name: "Grilled Chicken Panini",
    category: "Sandwiches",
    price: 599,
    description:
      "Grilled chicken breast pressed in a crispy panini with herbs and cheese.",
    image: "/images/food/grilled-chicken-panini.jpg",
  },
  {
    id: "sw-05",
    name: "Grilled Beef Panini",
    category: "Sandwiches",
    price: 699,
    description:
      "Seasoned grilled beef in a toasted panini with smoky sauce.",
    image: "/images/food/grilled-beef-panini.jpg",
  },
  {
    id: "sw-06",
    name: "Spicy Chunky Panini",
    category: "Sandwiches",
    price: 449,
    description:
      "Chunky spiced chicken panini with jalapeños and pepper jack cheese.",
    image: "/images/food/spicy-chunky-panini.jpg",
  },

  // ============== BURGERS ==============
  {
    id: "bg-01",
    name: "Special Burger",
    category: "Burgers",
    price: 850,
    description:
      "Our signature double-patty burger loaded with cheese, special sauce, and fresh veggies.",
    image: "/images/food/special-burger.jpg",
    popular: true,
  },
  {
    id: "bg-02",
    name: "Smash Beef Burger",
    category: "Burgers",
    price: 600,
    description:
      "Thin smashed beef patty with crispy edges, cheese, and classic toppings.",
    image: "/images/food/smash-beef-burger.jpg",
    variants: [
      { name: "Single Patty", price: 600 },
      { name: "Double Patty", price: 999 },
    ],
  },
  {
    id: "bg-03",
    name: "Crispy Bird Burger",
    category: "Burgers",
    price: 450,
    description:
      "Crispy fried chicken burger with lettuce, pickles, and creamy mayo.",
    image: "/images/food/crispy-bird-burger.jpg",
    popular: true,
  },
  {
    id: "bg-04",
    name: "Mighty Tower Burger",
    category: "Burgers",
    price: 650,
    description:
      "A towering stack of double chicken patties, cheese, onion rings, and sauces.",
    image: "/images/food/mighty-tower-burger.jpg",
    popular: true,
  },
  {
    id: "bg-05",
    name: "Parmesan Cheese Burger",
    category: "Burgers",
    price: 499,
    description:
      "Juicy chicken patty coated in parmesan with melted cheese and herb mayo.",
    image: "/images/food/parmesan-cheese-burger.jpg",
  },
  {
    id: "bg-06",
    name: "Junior Burger",
    category: "Burgers",
    price: 299,
    description:
      "A perfectly sized burger for lighter appetites — classic and satisfying.",
    image: "/images/food/junior-burger.jpg",
  },
  {
    id: "bg-07",
    name: "Sub Chunky Burger",
    category: "Burgers",
    price: 499,
    description:
      "Chunky chicken burger with bold spices and a crunchy coating.",
    image: "/images/food/sub-chunky-burger.jpg",
  },
  {
    id: "bg-08",
    name: "Sub Chicken Burger",
    category: "Burgers",
    price: 449,
    description:
      "Classic chicken burger with fresh lettuce, tomato, and signature sauce.",
    image: "/images/food/sub-chicken-burger.jpg",
  },
  {
    id: "bg-09",
    name: "Cornflex Burger",
    category: "Burgers",
    price: 449,
    description:
      "Crunchy cornflake-coated chicken burger with a unique crispy texture.",
    image: "/images/food/cornflex-burger.jpg",
  },
  {
    id: "bg-10",
    name: "Tex Mex Chicken Burger",
    category: "Burgers",
    price: 499,
    description:
      "Tex-Mex spiced chicken burger with guacamole and chipotle sauce.",
    image: "/images/food/tex-mex-burger.jpg",
  },
  {
    id: "bg-11",
    name: "Most Wanted Burger",
    category: "Burgers",
    price: 499,
    description:
      "A flavor-packed burger that lives up to its name — bold and irresistible.",
    image: "/images/food/most-wanted-burger.jpg",
  },
  {
    id: "bg-12",
    name: "New Mexico Burger",
    category: "Burgers",
    price: 649,
    description:
      "Spicy New Mexico-style burger with green chili, pepper jack, and smoky sauce.",
    image: "/images/food/new-mexico-burger.jpg",
  },

  // ============== PASTAS ==============
  {
    id: "ps-01",
    name: "Alfredo De Polo",
    category: "Pastas",
    price: 649,
    description:
      "Creamy white sauce pasta with tender chicken pieces and herbs.",
    image: "/images/food/alfredo-de-polo.jpg",
  },
  {
    id: "ps-02",
    name: "Penne Arrabiata",
    category: "Pastas",
    price: 649,
    description:
      "Penne in a fiery tomato sauce with garlic, chili flakes, and fresh basil.",
    image: "/images/food/penne-arrabiata.jpg",
  },
  {
    id: "ps-03",
    name: "Southwest Baked Pasta",
    category: "Pastas",
    price: 699,
    description:
      "Oven-baked pasta with a southwest-spiced sauce and melted cheese topping.",
    image: "/images/food/southwest-baked-pasta.jpg",
  },
  {
    id: "ps-04",
    name: "Crunchy Pasta",
    category: "Pastas",
    price: 699,
    description:
      "Creamy pasta topped with crispy fried chicken strips for the perfect crunch.",
    image: "/images/food/crunchy-pasta.jpg",
  },
  {
    id: "ps-05",
    name: "Lasagna Chicken",
    category: "Pastas",
    price: 649,
    description:
      "Layered lasagna with seasoned chicken, béchamel, and mozzarella.",
    image: "/images/food/lasagna-chicken.jpg",
  },
  {
    id: "ps-06",
    name: "Lasagna Beef",
    category: "Pastas",
    price: 749,
    description:
      "Rich beef lasagna with bolognese sauce, cheese, and golden crust.",
    image: "/images/food/lasagna-beef.jpg",
  },

  // ============== STEAKS ==============
  {
    id: "st-01",
    name: "Swiss Mushroom Steak",
    category: "Steaks",
    price: 1499,
    description:
      "Tender steak topped with sautéed mushrooms and creamy Swiss cheese sauce.",
    image: "/images/food/swiss-mushroom-steak.jpg",
    variants: [
      { name: "Chicken", price: 1499 },
      { name: "Beef", price: 1899 },
    ],
  },
  {
    id: "st-02",
    name: "Moroccan Steak",
    category: "Steaks",
    price: 1499,
    description:
      "Exotic Moroccan-spiced steak with aromatic herbs and rich sauce.",
    image: "/images/food/moroccan-steak.jpg",
    variants: [
      { name: "Chicken", price: 1499 },
      { name: "Beef", price: 1849 },
    ],
  },
  {
    id: "st-03",
    name: "Mexicana Steak",
    category: "Steaks",
    price: 1499,
    description:
      "Bold Mexican-style steak with spicy salsa, peppers, and cheese.",
    image: "/images/food/mexicana-steak.jpg",
    variants: [
      { name: "Chicken", price: 1499 },
      { name: "Beef", price: 1849 },
    ],
  },
  {
    id: "st-04",
    name: "Classic Pepper Steak",
    category: "Steaks",
    price: 1499,
    description:
      "Classic steak with a bold cracked pepper crust and rich gravy.",
    image: "/images/food/classic-pepper-steak.jpg",
    variants: [
      { name: "Chicken", price: 1499 },
      { name: "Beef", price: 1749 },
    ],
  },
  {
    id: "st-05",
    name: "Tarragon Steak",
    category: "Steaks",
    price: 1499,
    description:
      "Herb-infused steak with a delicate tarragon cream sauce.",
    image: "/images/food/tarragon-steak.jpg",
    variants: [
      { name: "Chicken", price: 1499 },
      { name: "Beef", price: 1849 },
    ],
  },
  {
    id: "st-06",
    name: "Butter Mushroom Steak",
    category: "Steaks",
    price: 1499,
    description:
      "Buttery steak with garlic mushrooms in a velvety cream sauce.",
    image: "/images/food/butter-mushroom-steak.jpg",
    variants: [
      { name: "Chicken", price: 1499 },
      { name: "Beef", price: 1899 },
    ],
  },
  {
    id: "st-07",
    name: "Combo Steak",
    category: "Steaks",
    price: 2099,
    description:
      "The ultimate combo — chicken and beef steaks served together with sides.",
    image: "/images/food/combo-steak.jpg",
  },

  // ============== CHINESE & THAI ==============
  {
    id: "ct-01",
    name: "Chicken Chowmein",
    category: "Chinese & Thai",
    price: 449,
    description:
      "Stir-fried noodles with tender chicken and fresh vegetables in soy sauce.",
    image: "/images/food/chicken-chowmein.jpg",
    variants: [
      { name: "Single", price: 449 },
      { name: "Double", price: 799 },
    ],
  },
  {
    id: "ct-02",
    name: "Chicken Chilli Dry",
    category: "Chinese & Thai",
    price: 999,
    description:
      "Crispy chicken chunks tossed in a spicy chilli sauce with peppers.",
    image: "/images/food/chicken-chilli-dry.jpg",
  },
  {
    id: "ct-03",
    name: "Beef Chilli Dry",
    category: "Chinese & Thai",
    price: 1099,
    description:
      "Tender beef strips wok-fried with green chillies and bell peppers.",
    image: "/images/food/beef-chilli-dry.jpg",
  },
  {
    id: "ct-04",
    name: "Chicken Cashew Nuts",
    category: "Chinese & Thai",
    price: 1099,
    description:
      "Succulent chicken pieces with roasted cashews in a savory sauce.",
    image: "/images/food/chicken-cashew-nuts.jpg",
  },
  {
    id: "ct-05",
    name: "Shashlik",
    category: "Chinese & Thai",
    price: 1099,
    description:
      "Grilled chicken skewers with peppers and onions in a rich tomato sauce.",
    image: "/images/food/shashlik.jpg",
  },
  {
    id: "ct-06",
    name: "Egg Fried Rice",
    category: "Chinese & Thai",
    price: 349,
    description:
      "Fluffy rice wok-fried with eggs, spring onions, and soy sauce.",
    image: "/images/food/egg-fried-rice.jpg",
  },
  {
    id: "ct-07",
    name: "Chicken Fried Rice",
    category: "Chinese & Thai",
    price: 499,
    description:
      "Classic fried rice loaded with chicken pieces and mixed vegetables.",
    image: "/images/food/chicken-fried-rice.jpg",
  },
  {
    id: "ct-08",
    name: "Garlic Fried Rice",
    category: "Chinese & Thai",
    price: 349,
    description:
      "Fragrant garlic-infused fried rice with a buttery finish.",
    image: "/images/food/garlic-fried-rice.jpg",
  },
  {
    id: "ct-09",
    name: "Vegetable Fried Rice",
    category: "Chinese & Thai",
    price: 200,
    description:
      "Light and colorful fried rice with seasonal garden vegetables.",
    image: "/images/food/vegetable-fried-rice.jpg",
  },

  // ============== PIZZA ==============
  {
    id: "pz-01",
    name: "Special Pizza",
    category: "Pizza",
    price: 1250,
    description:
      "Our signature pizza with premium toppings and extra cheese.",
    image: "/images/food/special-pizza.jpg",
    sizes: [
      { name: "Small", price: 799 },
      { name: "Medium", price: 1250 },
      { name: "Large", price: 1799 },
      { name: "Family", price: 2599 },
    ],
  },
  {
    id: "pz-02",
    name: "Crown Crust Pizza",
    category: "Pizza",
    price: 1250,
    description:
      "Stuffed crust pizza with cheese-filled crown edges and loaded toppings.",
    image: "/images/food/crown-crust-pizza.jpg",
    sizes: [
      { name: "Small", price: 799 },
      { name: "Medium", price: 1250 },
      { name: "Large", price: 1799 },
      { name: "Family", price: 2599 },
    ],
  },
  {
    id: "pz-03",
    name: "Deep Dish Pizza",
    category: "Pizza",
    price: 1449,
    description:
      "Thick and loaded deep dish pizza with layers of cheese and sauce.",
    image: "/images/food/deep-dish-pizza.jpg",
    sizes: [{ name: "8 inch", price: 1449 }],
  },
  {
    id: "pz-04",
    name: "Chicken Tikka Pizza",
    category: "Pizza",
    price: 1099,
    description:
      "Desi-style pizza topped with spicy chicken tikka, onions, and green chillies.",
    image: "/images/food/chicken-tikka-pizza.jpg",
    popular: true,
    sizes: [
      { name: "Small", price: 699 },
      { name: "Medium", price: 1099 },
      { name: "Large", price: 1699 },
      { name: "Family", price: 2249 },
    ],
  },
  {
    id: "pz-05",
    name: "Creamy Melt Pizza",
    category: "Pizza",
    price: 1099,
    description:
      "A creamy cheese base pizza with chicken, mushrooms, and extra mozzarella.",
    image: "/images/food/creamy-melt-pizza.jpg",
    sizes: [
      { name: "Small", price: 699 },
      { name: "Medium", price: 1099 },
      { name: "Large", price: 1699 },
      { name: "Family", price: 2249 },
    ],
  },
  {
    id: "pz-06",
    name: "BBQ Pizza",
    category: "Pizza",
    price: 1099,
    description:
      "Smoky BBQ sauce base with grilled chicken, onions, and bell peppers.",
    image: "/images/food/bbq-pizza.jpg",
    sizes: [
      { name: "Small", price: 699 },
      { name: "Medium", price: 1099 },
      { name: "Large", price: 1699 },
      { name: "Family", price: 2249 },
    ],
  },
  {
    id: "pz-07",
    name: "Chicken Fajita Pizza",
    category: "Pizza",
    price: 1099,
    description:
      "Fajita-seasoned chicken with peppers and onions on a cheesy base.",
    image: "/images/food/chicken-fajita-pizza.jpg",
    sizes: [
      { name: "Small", price: 699 },
      { name: "Medium", price: 1099 },
      { name: "Large", price: 1699 },
      { name: "Family", price: 2249 },
    ],
  },
  {
    id: "pz-08",
    name: "Peri Peri Pizza",
    category: "Pizza",
    price: 1099,
    description:
      "Spicy peri-peri chicken pizza with a tangy and fiery kick.",
    image: "/images/food/peri-peri-pizza.jpg",
    sizes: [
      { name: "Small", price: 699 },
      { name: "Medium", price: 1099 },
      { name: "Large", price: 1699 },
      { name: "Family", price: 2249 },
    ],
  },
  {
    id: "pz-09",
    name: "Four Season Pizza",
    category: "Pizza",
    price: 1099,
    description:
      "Four distinct sections, each with different premium toppings.",
    image: "/images/food/four-season-pizza.jpg",
    sizes: [
      { name: "Small", price: 699 },
      { name: "Medium", price: 1099 },
      { name: "Large", price: 1699 },
      { name: "Family", price: 2249 },
    ],
  },
  {
    id: "pz-10",
    name: "Malai Boti Pizza",
    category: "Pizza",
    price: 1099,
    description:
      "Creamy malai boti chunks on a rich white sauce base with cheese.",
    image: "/images/food/malai-boti-pizza.jpg",
    sizes: [
      { name: "Small", price: 699 },
      { name: "Medium", price: 1099 },
      { name: "Large", price: 1699 },
      { name: "Family", price: 2249 },
    ],
  },
  {
    id: "pz-11",
    name: "Philly Beef Pizza",
    category: "Pizza",
    price: 1250,
    description:
      "Philly cheesesteak-inspired pizza with sliced beef and melted cheese.",
    image: "/images/food/philly-beef-pizza.jpg",
    sizes: [
      { name: "Small", price: 799 },
      { name: "Medium", price: 1250 },
      { name: "Large", price: 1799 },
      { name: "Family", price: 2599 },
    ],
  },
  {
    id: "pz-12",
    name: "Lebanese Pizza",
    category: "Pizza",
    price: 1099,
    description:
      "Mediterranean-style pizza with spiced meat, herbs, and tangy toppings.",
    image: "/images/food/lebanese-pizza.jpg",
    sizes: [
      { name: "Small", price: 799 },
      { name: "Medium", price: 1099 },
      { name: "Large", price: 1699 },
      { name: "Family", price: 2449 },
    ],
  },
  {
    id: "pz-13",
    name: "Calzone",
    category: "Pizza",
    price: 1099,
    description:
      "Folded pizza pocket stuffed with chicken, cheese, and vegetables.",
    image: "/images/food/calzone.jpg",
    sizes: [
      { name: "Small", price: 699 },
      { name: "Medium", price: 1099 },
      { name: "Large", price: 1699 },
      { name: "Family", price: 2249 },
    ],
  },

  // ============== BEVERAGES ==============
  {
    id: "bv-01",
    name: "Regular Soft Drink",
    category: "Beverages",
    price: 100,
    description: "Chilled regular-size soft drink.",
    image: "/images/food/soft-drink.jpg",
  },
  {
    id: "bv-02",
    name: "1 Ltr Drink",
    category: "Beverages",
    price: 200,
    description: "1 litre soft drink bottle — perfect for sharing.",
    image: "/images/food/1ltr-drink.jpg",
  },
  {
    id: "bv-03",
    name: "1.5 Ltr Drink",
    category: "Beverages",
    price: 250,
    description: "1.5 litre soft drink bottle for the whole table.",
    image: "/images/food/1-5ltr-drink.jpg",
  },
  {
    id: "bv-04",
    name: "Fresh Lime",
    category: "Beverages",
    price: 150,
    description: "Freshly squeezed lime juice — refreshing and tangy.",
    image: "/images/food/fresh-lime.jpg",
  },
  {
    id: "bv-05",
    name: "Mint Margarita",
    category: "Beverages",
    price: 250,
    description: "Cool and refreshing mint margarita with a citrus twist.",
    image: "/images/food/mint-margarita.jpg",
  },
  {
    id: "bv-06",
    name: "Mineral Water",
    category: "Beverages",
    price: 100,
    description: "Pure mineral water.",
    image: "/images/food/mineral-water.jpg",
    variants: [
      { name: "Small", price: 50 },
      { name: "Large", price: 100 },
    ],
  },
];

export const popularItems = menuItems.filter((item) => item.popular);

export const getItemsByCategory = (category: string): MenuItem[] => {
  if (category === "All") return menuItems;
  return menuItems.filter((item) => item.category === category);
};
