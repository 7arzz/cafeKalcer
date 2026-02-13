import { useState } from "react";
import MenuCard from "./MenuCard";

const menuItems = [
  { name: "Espresso", price: 15000, description: "Strong coffee shot" },
  { name: "Cappuccino", price: 25000, description: "Coffee + milk foam" },
  { name: "Latte", price: 28000, description: "Smooth & creamy" },
  { name: "Mocha", price: 30000, description: "Coffee + chocolate" },
  { name: "Americano", price: 20000, description: "Espresso + water" },
  { name: "Flat White", price: 22000, description: "Espresso + milk" },
  { name: "Macchiato", price: 24000, description: "Espresso + milk foam" },
  { name: "Cafe Latte", price: 27000, description: "Coffee + milk foam" },
  { name: "Cafe Mocha", price: 29000, description: "Coffee + chocolate" },
  { name: "Cafe Americano", price: 21000, description: "Espresso + water" },
];

export default function Home() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (item) => setCart([...cart, item]);
  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Menu</h2>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {menuItems.map((item, idx) => (
          <MenuCard
            key={idx}
            name={item.name}
            price={item.price}
            description={item.description}
            onAdd={() => handleAddToCart(item)}
          />
        ))}
      </div>

      {/* Cart icon */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#667eea",
          color: "#fff",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
        onClick={() => setShowCart(!showCart)}
      >
        🛒
        {cart.length > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              background: "#ff4d4f",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              fontSize: "0.8rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {cart.length}
          </span>
        )}
      </div>

      {/* Cart popup */}
      {showCart && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "20px",
            width: "300px",
            maxHeight: "400px",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            padding: "20px",
            overflowY: "auto",
            zIndex: 1000,
            color: "#230a8f",
          }}
        >
          <h3>Your Cart</h3>
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <ul>
              {cart.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span>{item.name}</span>
                  <span>Rp {item.price.toLocaleString("id-ID")}</span>
                  <button
                    onClick={() => handleRemoveFromCart(idx)}
                    style={{
                      marginLeft: "10px",
                      padding: "2px 6px",
                      background: "#ffffff",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    ❌
                  </button>
                </li>
              ))}
            </ul>
          )}
          {cart.length > 0 && (
            <p style={{ fontWeight: "700", marginTop: "10px" }}>
              Total: Rp {totalPrice.toLocaleString("id-ID")}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
