import headphon1 from "../assets/headphon1.png";
import headphon2 from "../assets/headphon2.png";
import ring from "../assets/ring1.png";
import sneaker from "../assets/sneaker1.png";
import sunglas from "../assets/sunglas1.png";
import wristwatch1 from "../assets/wristwatch1.png";
import wristwatch2 from "../assets/wristwatch2.png";
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
import clothes1 from "../assets/clothes1.png";
import clothes2 from "../assets/clothes2.png";
import clothes3 from "../assets/clothes3.png";
import clothes4 from "../assets/clothes4.png";
import jewelry1 from "../assets/jewelry1.png";

const products = {
  wristwatches: [
    {
      id: 1,
      name: "Luxury Wristwatch",
      price: 2500,
      image: wristwatch1,
      isNew: true,
    },
    {
      id: 2,
      name: "Classic Leather Watch",
      price: 1800,
      image: wristwatch2,
    },
  ],
  jewelry: [
    { 
      id: 3, 
      name: "Gold Ring", 
      price: 1200, 
      image: ring 

    },
    {
      id: 4,
      name: "Diamond Necklace",
      price: 5000,
      image: jewelry1,
      discount: 10,
    },
  ],
  clothes: [
    {
      id: 5,
      name: "Marled Bolero Jacket",
      price: 1700,
      image: clothes1,
      oldPrice: 2499,
      discount: 20,
    },
    {
      id: 6,
      name: "Newbury Blazer",
      price: 950,
      image: clothes2,
      isNew: true,
    },
    {
      id: 7,
      name: "Flounced Jacket",
      price: 1250,
      image: clothes3,
    },
    {
      id: 8,
      name: "Racing Hiking Shirt",
      price: 600,
      image: clothes4,
      oldPrice: 999,
    },
    {
      id: 9,
      name: "SymFrame Biking Jacket",
      price: 850,
      image: clothes1,
      isNew: true,
    },
    {
      id: 10,
      name: "SphereWind Biking Jacket",
      price: 1050,
      image: clothes4,
    },
  ],
  books: [
    { id: 11, name: "The Great Novel", price: 500, image: book1 },
    { id: 12, name: "Tech Trends 2025", price: 800, image: book2 },
  ],
  gadgets: [
    { id: 13, name: "Oraimo Headphone", price: 340, image: headphon1 },
    { id: 14, name: "Apple Headset", price: 2400, image: headphon2 },
  ],
};

export default products;
