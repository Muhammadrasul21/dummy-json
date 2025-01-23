import { CiHeart, CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import arte from "../assets/arte.png";
import divinare from "../assets/divinare.png";
import odeon from "../assets/odeon.png";

export const navItems = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Contact", path: "/contact" },
  { id: 4, title: "Login", path: "/login" },
  { id: 5, title: "Delivery", path: "/delivery" },
];

export const navIcons = [
  {
    id: 1,
    icon: CiSearch,
    title: "Search",
  },
  {
    id: 2,
    icon: CiHeart,
    title: "Favorites",
  },
  {
    id: 3,
    icon: FaCartShopping,
    title: "Basket",
  },
];
export const socialMedia = ["VK", "VK", "VK"];
export const footerInfo = [
  "Chandeliers",
  "Lamps",
  "Wall lights",
  "Floor lamps",
  "Accessories",
  "Table lamps",
];
export const ulInfo = [
  "Spots",
  "Track lights",
  "Outdoor lights",
  "Technical lights",
  "LED lights",
];
export const companyCard = [
  { id: 1, title: "170+", desc: "Товаров" },
  { id: 2, title: "1000+", desc: "Довольных покупателей" },
  { id: 3, title: "170+", desc: "Товаров" },
];
export const brendImages = [arte, divinare, odeon, arte];
export const returnItems = [
  "Товар имеет первоначальный вид, имеется товарная кондиция;",
  "Товар имеет полную комплектацию, включая упаковочные материалы;",
  "Товар не имеет следов подключался и не имеет признаков монтажа;",
  "Упаковка товара не имеет повреждений, присутствует первоначальный товарный вид;",
  "Есть документ, подтверждающий покупку в нашем интернет-магазине.",
  "Для возврата товара необходимо привезти к нам в офис. ",
  "Товар из других городов можно прислать нам транспортной компанией, при этом услуги транспортной компании оплачиваются клиентом.",
  "*B течение 14 дней для отдельных брендов. При оформлении заказа уточните y менеджера",
];
