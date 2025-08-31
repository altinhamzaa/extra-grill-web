
import  { useState, type JSX , useEffect} from "react";
import { NavLink } from "react-router-dom";
import BackButtons from "./Buttons";
import BackToTopButton from "./BackToTopButton";
import "../styles/Menu.css";
import foodImg from "../assets/eat/food.jpg";
import drinkImg from "../assets/drink/download.jpeg";

interface MenuItem {
  title: string;
  description: string;
  image: string;
  price?: string;
}

export default function Menu(): JSX.Element {
  const [activeTab, setActiveTab] = useState<"eat" | "drink">("eat");

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const menuItems: Record<"eat" | "drink", MenuItem[]> = {
    eat: [
      {
        title: "Grilled Chicken",
        description: "Delicious grilled chicken with herbs and spices. Delicious grilled chicken with herbs and spices.",
        price: "$2.50",
        image: foodImg,
      },
      {
        title: "Beef Burger",
        description: "Juicy beef burger with cheddar and crispy fries.",
        price: "$2.50",
        image: foodImg,
      },
       {
        title: "Beef Burger",
        description: "Juicy beef burger with cheddar and crispy fries.",
        price: "$2.50",
        image: foodImg,
      },
       {
        title: "Beef Burger",
        description: "Juicy beef burger with cheddar and crispy fries.",
        price: "$2.50",
        image: foodImg,
      },
       {
        title: "Beef Burger",
        description: "Juicy beef burger with cheddar and crispy fries.",
        price: "$2.50",
        image: foodImg,
      },
       {
        title: "Beef Burger",
        description: "Juicy beef burger with cheddar and crispy fries.",
        price: "$2.50",
        image: foodImg,
      },
       {
        title: "Beef Burger",
        description: "Juicy beef burger with cheddar and crispy fries.",
        price: "$2.50",
        image: foodImg,
      },
       {
        title: "Beef Burger",
        description: "Juicy beef burger with cheddar and crispy fries.",
        price: "$2.50",
        image: foodImg,
      },
       {
        title: "Beef Burger",
        description: "Juicy beef burger with cheddar and crispy fries.",
        price: "$2.50",
        image: foodImg,
      },
         {
        title: "Beef Burger",
        description: "Juicy beef burger with cheddar and crispy fries.",
        price: "$2.50",
        image: foodImg,
      },
         {
        title: "Beef Burger",
        description: "Juicy beef burger with cheddar and crispy fries.",
        price: "$2.50",
        image: foodImg,
      },
         {
        title: "Beef Burger",
        description: "Juicy beef burger with cheddar and crispy fries.",
        price: "$2.50",
        image: foodImg,
      },
      
    ],
    drink: [
      {
        title: "Fresh Orange Juice",
        description: "100% fresh-squeezed orange juice.",
        price: "$2.50",
        image: drinkImg,
      },
      {
        title: "Iced Coffee",
        description: "Chilled coffee with milk and a touch of sweetness.",
        price: "$3.50",
        image: drinkImg,
      },
      {
        title: "Iced Coffee",
        description: "Chilled coffee with milk and a touch of sweetness.",
        price: "$3.50",
        image: drinkImg,
      },
      {
        title: "Iced Coffee",
        description: "Chilled coffee with milk and a touch of sweetness.",
        price: "$3.50",
        image: drinkImg,
      },
      {
        title: "Iced Coffee",
        description: "Chilled coffee with milk and a touch of sweetness.",
        price: "$3.50",
        image: drinkImg,
      },
      {
        title: "Iced Coffee",
        description: "Chilled coffee with milk and a touch of sweetness.",
        price: "$3.50",
        image: drinkImg,
      },
      {
        title: "Iced Coffee",
        description: "Chilled coffee with milk and a touch of sweetness.",
        price: "$3.50",
        image: drinkImg,
      },
        {
        title: "Iced Coffee",
        description: "Chilled coffee with milk and a touch of sweetness.",
        price: "$3.50",
        image: drinkImg,
      },
        {
        title: "Iced Coffee",
        description: "Chilled coffee with milk and a touch of sweetness.",
        price: "$3.50",
        image: drinkImg,
      },
        {
        title: "Iced Coffee",
        description: "Chilled coffee with milk and a touch of sweetness.",
        price: "$3.50",
        image: drinkImg,
      },
        {
        title: "Iced Coffee",
        description: "Chilled coffee with milk and a touch of sweetness.",
        price: "$3.50",
        image: drinkImg,
      },
        {
        title: "Iced Coffee",
        description: "Chilled coffee with milk and a touch of sweetness.",
        price: "$3.50",
        image: drinkImg,
      },
    ],
  };

  return (
    <div className="menu-page" id="menu">
      <header className="menu-header">
        <NavLink to="/" className="back-button">
          <BackButtons />
        </NavLink>
        <h1 className="menu-title">Our Menu</h1>
      </header>

      <div className="menu-tabs d-flex justify-content-center gap-3 my-4">
        <button
          className={`btn btn-outline-light fs-5 px-4 py-2 ${activeTab === "eat" ? "active" : ""}`}
          onClick={() => setActiveTab("eat")}
          style={{ width: "200px" }}
        >
          Eat
        </button>
        <button
          className={`btn btn-outline-light fs-5 px-4 py-2 ${activeTab === "drink" ? "active" : ""}`}
          onClick={() => setActiveTab("drink")}
          style={{ width: "200px" }}
        >
          Drink
        </button>
      </div>

      <div className="menu-table">
        {menuItems[activeTab].map((item, index) => (
          <div key={index} className="menu-item">
            <div className="menu-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="menu-content">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <p className="menu-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <BackToTopButton />
    </div>
  );
}
