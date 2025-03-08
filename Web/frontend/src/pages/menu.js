import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Correct for React Router v6
import "../CSS/menu.css";
import axios from 'axios'; // Ensure axios is imported

// Importing menu images
import B1 from "../Photos/menu/Chicken and Sweet Corn Soup.jpg";
import B2 from "../Photos/menu/Cream of Chicken Soup.jpg";
import B3 from "../Photos/menu/Tomato Soup.jpg";
import B4 from "../Photos/menu/Minestrone Soup.jpg";
import B5 from "../Photos/menu/French Onion Soup.jpg";
import B6 from "../Photos/menu/Clam Chowder.jpg";

import C1 from "../Photos/menu/Biryani.jpg";
import C2 from "../Photos/menu/Fried Rice.jpg";
import C3 from "../Photos/menu/Mix Fried Rice.jpg";
import C4 from "../Photos/menu/Seafood Rice.jpg";
import C5 from "../Photos/menu/Nasi Goreng.jpg";
import C6 from "../Photos/menu/Kottu Rice.jpg";

import D1 from "../Photos/menu/Caesar Salad.jpg";
import D2 from "../Photos/menu/Greek Salad.jpg";
import D3 from "../Photos/menu/Coleslaw.jpg";
import D4 from "../Photos/menu/Waldorf Salad.jpg";
import D5 from "../Photos/menu/Potato Salad.jpg";
import D6 from "../Photos/menu/Prawn Salad.jpg";

import E1 from "../Photos/menu/Koththu Roti.jpg";
import E2 from "../Photos/menu/Hoppers.jpg";
import E3 from "../Photos/menu/Rice and Curry.png";
import E4 from "../Photos/menu/Lamprais.jpg";
import E5 from "../Photos/menu/String Hoppers.jpeg";
import E6 from "../Photos/menu/Sambal.jpg";

import F1 from "../Photos/menu/Koththu Roti.jpg";
import F2 from "../Photos/menu/Kottu Beef.jpg";
import F3 from "../Photos/menu/Kottu Lamb.jpg";
import F4 from "../Photos/menu/Kottu Vegetable.jpeg";
import F5 from "../Photos/menu/Kottu Fish.jpeg";
import F6 from "../Photos/menu/Cheese Kottu.jpeg";

import G1 from "../Photos/menu/Spaghetti Bolognese.jpg";
import G2 from "../Photos/menu/Pad Thai.jpg";
import G3 from "../Photos/menu/Chinese Noodles.jpg";
import G4 from "../Photos/menu/Ramen.jpg";
import G5 from "../Photos/menu/Chow Mein.jpg";
import G6 from "../Photos/menu/Udon.jpg";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [size, setSize] = useState("");
  const [orderCompleted, setOrderCompleted] = useState(false);

  const navigate = useNavigate();  // Updated for React Router v6

  const openPopup = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
    setOrderCompleted(false);
    setSize("");
  };

  const placeOrder = async(e) => {
    if (size) {
      setOrderCompleted(true);
      e.preventDefault();
      setErrorMessage(''); // Clear previous error messages
        try {
            const response = await axios.post('http://localhost:3001/api/placeOrder', {
              email, 
              foodName, 
              foodSize,
              
            });
            if (response?.data?.success) {
                window.location.href = '/menu'; // Navigate to login on success
            } else {
                setErrorMessage('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error occurred during registration:', error);
            setErrorMessage('An error occurred. Please try again later.');
        }
      setTimeout(() => {
        navigate('/thank-you');  // Correct use of 'navigate' instead of 'history.push'
      }, 2000);
    }
  };

  const menuItems = [
    {
      category: "Soups & Comfort Foods",
      items: [
        { name: "Chicken and Sweet Corn Soup", description: "A warm soup with chicken and sweet corn.", price: "LKR 1,500", photo: B1 },
        { name: "Cream of Chicken Soup", description: "A creamy soup with chicken and vegetables.", price: "LKR 1,200", photo: B2 },
        { name: "Tomato Soup", description: "A smooth, creamy soup made from tomatoes and spices.", price: "LKR 1,400", photo: B3 },
        { name: "Minestrone Soup", description: "A vegetable soup with beans and pasta.", price: "LKR 1,350", photo: B4 },
        { name: "French Onion Soup", description: "Savory soup with caramelized onions and cheese.", price: "LKR 1,600", photo: B5 },
        { name: "Clam Chowder", description: "A creamy soup with clams, potatoes, and onions.", price: "LKR 1,750", photo: B6 },
      ],
    },
    {
      category: "Rice Delights",
      items: [
        { name: "Biryani", description: "A flavorful rice dish with spiced meat or vegetables.", price: "LKR 1,800", photo: C1 },
        { name: "Fried Rice", description: "Stir-fried rice with vegetables, eggs, and choice of meat.", price: "LKR 1,200", photo: C2 },
        { name: "Mix Fried Rice", description: "A combination of rice with various meats, vegetables, and spices.", price: "LKR 1,600", photo: C3 },
        { name: "Seafood Rice", description: "Rice cooked with fresh seafood and aromatic spices.", price: "LKR 2,200", photo: C4 },
        { name: "Nasi Goreng", description: "Indonesian-style fried rice with a mix of vegetables, meat, and sambal.", price: "LKR 1,500", photo: C5 },
        { name: "Kottu Rice", description: "Sri Lankan-style rice with chopped roti, meat, and vegetables.", price: "LKR 1,700", photo: C6 },
      ],
    },
    {
      category: "Kottu Specials",
      items: [
        { name: "Kottu Chicken", description: "Sri Lankan-style kottu made with chicken, roti, and vegetables.", price: "LKR 1,700", photo: F1 },
        { name: "Kottu Beef", description: "Sri Lankan-style kottu made with tender beef, roti, and vegetables.", price: "LKR 1,800", photo: F2 },
        { name: "Kottu Lamb", description: "Spicy kottu with lamb, roti, and vegetables.", price: "LKR 2,000", photo: F3 },
        { name: "Kottu Vegetable", description: "A vegetarian kottu made with mixed vegetables and roti.", price: "LKR 1,200", photo: F4 },
        { name: "Kottu Fish", description: "Kottu made with fresh fish, roti, and vegetables.", price: "LKR 1,900", photo: F5 },
        { name: "Cheese Kottu", description: "A cheesy kottu made with roti, cheese, and a choice of meat or vegetables.", price: "LKR 2,200", photo: F6 },
      ],
    },
    {
      category: 'Salads & Sides',
      items: [
        { name: 'Caesar Salad', description: 'Crisp lettuce with creamy dressing, croutons, and parmesan.', price: 'LKR 1,200', photo: D1 },
        { name: 'Greek Salad', description: 'A mix of tomatoes, cucumbers, olives, and feta cheese with olive oil dressing.', price: 'LKR 1,500', photo: D2 },
        { name: 'Coleslaw', description: 'Shredded cabbage and carrots dressed in a tangy sauce.', price: 'LKR 800', photo: D3 },
        { name: 'Waldorf Salad', description: 'A refreshing salad with apples, celery, grapes, and walnuts.', price: 'LKR 1,000', photo: D4 },
        { name: 'Potato Salad', description: 'Creamy salad made with boiled potatoes, mayo, and seasoning.', price: 'LKR 900', photo: D5 },
        { name: 'Prawn Salad', description: 'A fresh salad with prawns, lettuce, and tangy dressing.', price: 'LKR 2,000', photo: D6 },
      ]
    },
    {
      category: 'Sri Lankan Specials',
      items: [
        { name: 'Kottu Roti', description: 'A popular Sri Lankan dish made from chopped roti, vegetables, and meat.', price: 'LKR 1,500', photo: E1 },
        { name: 'Hoppers', description: 'Crispy rice pancakes served with curry or sambol.', price: 'LKR 800', photo: E2 },
        { name: 'Rice and Curry', description: 'Steamed rice served with a variety of curries and accompaniments.', price: 'LKR 1,200', photo: E3 },
        { name: 'Lamprais', description: 'Rice wrapped in a banana leaf with mixed meat, curry, and sambol.', price: 'LKR 2,000', photo: E4 },
        { name: 'String Hoppers', description: 'Steamed rice flour noodles served with curry or sambol.', price: 'LKR 1,000', photo: E5 },
        { name: 'Sambal', description: 'A spicy Sri Lankan relish, typically made with chili and coconut.', price: 'LKR 500', photo: E6 },
      ]
    },
    {
      category: 'Noodles & Pasta',
      items: [
        { name: 'Spaghetti Bolognese', description: 'Classic pasta with a rich meat sauce.', price: 'LKR 1,400', photo: G1 },
        { name: 'Pad Thai', description: 'Stir-fried noodles with shrimp, eggs, and peanuts in a tangy sauce.', price: 'LKR 1,800', photo: G2 },
        { name: 'Chinese Noodles', description: 'Stir-fried noodles with vegetables and choice of meat.', price:G3},

        { name: 'Ramen', description: 'Japanese noodle soup with a rich broth and toppings like eggs and pork.', price: 'LKR 2,000', photo: G4 },
        { name: 'Chow Mein', description: 'Stir-fried noodles with vegetables and meat, in a savory sauce.', price: 'LKR 1,500', photo: G5 },
        { name: 'Udon', description: 'Thick Japanese noodles in a light soy-based broth.', price: 'LKR 1,700', photo: G6 },
        ]
        },
        
        /* {
        category: 'Desserts',
        items: [
        { name: 'Chocolate Cake', description: 'A rich and moist chocolate delight.', price: 'LKR 1,500', photo: "" },
        { name: 'Ice Cream Sundae', description: 'Vanilla ice cream topped with a variety of toppings.', price: 'LKR 1,200', photo: "" },
        { name: 'Cheesecake', description: 'A creamy and tangy dessert.', price: 'LKR 1,400', photo: "CheesecakeImg" },
        { name: 'Fruit Salad', description: 'A refreshing mix of seasonal fruits.', price: 'LKR 1,000', photo: "" },
        { name: 'Brownie', description: 'Fudgy and chocolatey with a perfect texture.', price: 'LKR 1,200', photo: "" },
        { name: 'Tiramisu', description: 'A creamy Italian dessert made with coffee-soaked biscuits and mascarpone.', price: 'LKR 1,800', photo: "" },
        ],
        } */


  ];

  return (
    <div className="menu-container">
      <h1 className="menu-title">Our Menu</h1>
      {menuItems.map((section, index) => (
        <div key={index} className="menu-section">
          <h2 className="menu-category">{section.category}</h2>
          <div className="menu-items-grid">
            {section.items.map((item, idx) => (
              <div key={idx} className="menu-item-card" onClick={() => openPopup(item)}>
                <img src={item.photo} alt={item.name} className="menu-item-image" />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Popup Modal */}
      {isOpen && selectedItem && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>{selectedItem.name}</h2>
            <img src={selectedItem.photo} alt={selectedItem.name} className="popup-image" />
            <p>{selectedItem.description}</p>
            <span>{selectedItem.price}</span>

            <div>
              <label htmlFor="size">Choose Size: </label>
              <select
                id="size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="">Select Size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>

            <button onClick={placeOrder}>Place Order</button>
            {orderCompleted && <p>Order Placed! Thank you.</p>}
            {/* <button onClick={() => setIsOpen(false)}>Close</button> */}
          </div>
        </div>
      )}




      


    </div>
  );
}
