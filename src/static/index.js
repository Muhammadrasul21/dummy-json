import { CiHeart } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export const navItems = ["About", "Delivery", "Garant", "Contact", "Blog"];

export const navIcons = [
  {
    id: 1,
    icon: CiHeart, // Komponentni to'g'ridan-to'g'ri saqlaymiz
    title: "Favorites",
  },
  {
    id: 2,
    icon: FaPhoneAlt,
    title: "Call",
  },
  {
    id: 3,
    icon: FaCartShopping,
    title: "Basket",
  },
];
