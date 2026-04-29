export type MenuCategory = "Cakes" | "Laban Specials" | "Kunafa Specials";

export type MenuItem = {
  id: string;
  name: string;
  arabicName?: string;
  tamilName?: string;
  category: MenuCategory;
  description: string;
};

export const MENU: MenuItem[] = [
  {
    id: "cheese-bomb",
    name: "Cheese Bomb",
    arabicName: "قنبلة الجبن",
    tamilName: "சீஸ் பாம்ப்",
    category: "Kunafa Specials",
    description:
      "A golden kunafa shell wrapped around a molten heart of Arabian cheese — crisp on the outside, gloriously stretchy within, finished with rose-kissed syrup.",
  },
  {
    id: "salankatia",
    name: "Salankatia",
    arabicName: "سلانكتية",
    tamilName: "சலாங்கடியா",
    category: "Laban Specials",
    description:
      "A delicate Levantine layered dessert of cream, slow-cooked milk, and toasted nuts — rich, silky, and unmistakably Arabian.",
  },
  {
    id: "koushri",
    name: "Koushri",
    arabicName: "كشري حلو",
    tamilName: "கௌஷ்ரி",
    category: "Laban Specials",
    description:
      "A house signature built from layers of laban-infused cream, crisp pastry, and pistachio — a quiet luxury in every spoon.",
  },
  {
    id: "loua",
    name: "Lou'a",
    arabicName: "لقمة",
    tamilName: "லுக்மா",
    category: "Kunafa Specials",
    description:
      "Bite-sized golden parcels of crispy semolina dough, soaked in fragrant saffron syrup and crowned with crushed pistachio.",
  },
  {
    id: "heba-cake",
    name: "Heba Cake",
    arabicName: "كيك هبة",
    tamilName: "ஹேபா கேக்",
    category: "Cakes",
    description:
      "Our gentle, cloud-light Arabian-inspired sponge layered with creamy laban frosting and a whisper of cardamom.",
  },
  {
    id: "fazea-chocola-cake",
    name: "Fazea Chocola Cake",
    arabicName: "كيك فزاع شوكولا",
    tamilName: "ஃபஸியா சாக்லேட் கேக்",
    category: "Cakes",
    description:
      "A bold, deeply indulgent chocolate cake — Arabian cocoa meets velvet ganache, finished with a touch of edible gold leaf.",
  },
  {
    id: "de-paris",
    name: "De Paris",
    arabicName: "دو باري",
    tamilName: "டே பாரிஸ்",
    category: "Cakes",
    description:
      "A Parisian-Arabian crossover — airy mousse, hazelnut praline crunch, and a delicate laban cream finish that melts on the tongue.",
  },
];

export const FILTERS = ["All", "Cakes", "Laban Specials", "Kunafa Specials"] as const;
export type FilterValue = (typeof FILTERS)[number];
