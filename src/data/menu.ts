export type MenuItem = {
  name: string;
  telugu?: string;
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
    id: "espresso",
    title: "Espresso Bar",
    blurb: "Double-shot pulls from single origin beans, 99mg of gentle kikku.",
    items: [
      {
        name: "Americano",
        telugu: "అమెరికానో",
        price: 99,
        description: "25–30% espresso, 70–75% hot water. Clean, bold, endlessly sippable.",
        tag: "Signature",
      },
      {
        name: "Macchiato",
        telugu: "మాకియాటో",
        price: 99,
        description: "One shot espresso 'stained' with a small spoon of milk foam.",
      },
      {
        name: "Espresso",
        price: 89,
        description: "A concentrated 30ml pull with a hazelnut crema.",
      },
      {
        name: "Cappuccino",
        price: 129,
        description: "Equal parts espresso, steamed milk and airy foam.",
      },
      {
        name: "Cafe Latte",
        price: 139,
        description: "Silky microfoam poured over a smooth double shot.",
      },
      {
        name: "Flat White",
        price: 139,
        description: "Stronger, velvety, no foam cap. For the purists.",
      },
    ],
  },
  {
    id: "cold",
    title: "Cold & Fresh",
    blurb: "Slow-steeped, over ice, made for warm afternoons.",
    items: [
      {
        name: "Cold Brew",
        price: 149,
        description: "18-hour steep, low acidity, naturally sweet.",
        tag: "Fresh",
      },
      {
        name: "Iced Americano",
        price: 119,
        description: "Espresso over ice with chilled spring water.",
      },
      {
        name: "Vietnamese Cold Coffee",
        price: 169,
        description: "Dark roast with condensed milk over crushed ice.",
      },
      {
        name: "Lemon Mint Cooler",
        price: 109,
        description: "Hand-pressed lemon, mint leaves, a whisper of sea salt.",
      },
      {
        name: "Seasonal Fruit Smoothie",
        price: 179,
        description: "Whatever the morning market had — blended with curd and honey.",
      },
    ],
  },
  {
    id: "tea",
    title: "Tea & Comfort",
    blurb: "For the days you want warmth without the buzz.",
    items: [
      { name: "Masala Chai", price: 79, description: "Ginger, cardamom, slow simmered milk." },
      { name: "Green Tea", price: 89, description: "Loose leaf, steeped 3 minutes, no bitterness." },
      { name: "Hot Chocolate", price: 159, description: "55% dark chocolate melted into milk." },
      { name: "Turmeric Latte", price: 149, description: "Turmeric, black pepper, oat milk." },
    ],
  },
  {
    id: "plates",
    title: "Kitchen Plates",
    blurb: "Fresh bakes and light plates, made through the day.",
    items: [
      {
        name: "Avocado Sourdough",
        price: 279,
        description: "Smashed avocado, chilli flakes, poached egg on house sourdough.",
        tag: "Chef's pick",
      },
      { name: "Butter Croissant", price: 129, description: "Laminated over three days. Flaky." },
      { name: "Garden Bowl", price: 259, description: "Greens, roasted veg, feta, lemon dressing." },
      { name: "Grilled Paneer Sandwich", price: 229, description: "Mint chutney, cucumber, toasted multigrain." },
      { name: "Banana Walnut Cake", price: 139, description: "Baked each morning, best with a flat white." },
      { name: "Cheesecake Slice", price: 189, description: "Baked New York style with a berry compote." },
    ],
  },
];
