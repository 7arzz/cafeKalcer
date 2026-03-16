import { useState } from "react";
import MenuCard from "./MenuCard";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");

  const menuItems = [
  {
    name: "Espresso",
    price: 15000,
    description: "Strong coffee shot",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=1200"
  },
  {
    name: "Cappuccino",
    price: 25000,
    description: "Coffee + milk foam",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=1200"
  },
  {
    name: "Latte",
    price: 28000,
    description: "Smooth & creamy",
    image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=1200"
  },
  {
    name: "Mocha",
    price: 30000,
    description: "Coffee + chocolate",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=1200"
  },
  {
    name: "Americano",
    price: 20000,
    description: "Espresso + water",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200"
  },
  {
    name: "Flat White",
    price: 22000,
    description: "Espresso + milk",
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=1200"
  },
  {
    name: "Macchiato",
    price: 24000,
    description: "Espresso + milk foam",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=1200"
  },
  {
    name: "Cafe Latte",
    price: 27000,
    description: "Classic coffee + milk",
    image: "https://images.unsplash.com/photo-1494314671902-399b18174975?w=1200"
  },
  {
    name: "Cafe Mocha",
    price: 29000,
    description: "Rich coffee + chocolate",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=1200"
  },
  {
    name: "Cafe Americano",
    price: 21000,
    description: "Smooth dark coffee",
    image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=1200"
  }
];
  const handleAddToCart = (item) => setCart([...cart, item]);

  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleOrderWhatsApp = () => {
    if (!customerName) {
      alert("Isi nama dulu ya!");
      return;
    }

    const phone = "6281234567890"; // ganti nomor WA kamu

    let message = `Halo, saya ingin memesan:\n\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - Rp ${item.price.toLocaleString("id-ID")}\n`;
    });

    message += `\nTotal: Rp ${totalPrice.toLocaleString("id-ID")}`;
    message += `\n\nNama: ${customerName}`;
    message += `\nAlamat/Meja: ${customerAddress}`;
    message += `\n\nTerima kasih`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    setCart([]);
  };

  return (
    <div
      style={{
        padding: "40px 20px",
        background: "radial-gradient(ellipse at top, #161a2b, #090a10)",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: "900",
            marginBottom: "40px",
            textAlign: "center",
            background: "linear-gradient(90deg, #90aaff, #e0e7ff, #90aaff)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-1.5px",
            animation: "shine 3s linear infinite",
          }}
        >
          Our Signature Menu
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "32px",
            justifyContent: "center",
          }}
        >
          {menuItems.map((item, idx) => (
            <MenuCard
              key={idx}
              name={item.name}
              price={item.price}
              image={item.image}
              description={item.description}
              onAdd={() => handleAddToCart(item)}
            />
          ))}
        </div>

        {/* Floating Cart Button */}
        <div
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            background: "var(--grad-primary)",
            color: "#fff",
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.8rem",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)",
            transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            zIndex: 900,
            border: "2px solid rgba(255, 255, 255, 0.1)",
          }}
          onClick={() => setShowCart(!showCart)}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1) rotate(-10deg)";
            e.currentTarget.style.boxShadow = "0 15px 40px rgba(99, 102, 241, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1) rotate(0deg)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(99, 102, 241, 0.4)";
          }}
        >
          🛒
          {cart.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                background: "#f43f5e",
                color: "white",
                borderRadius: "50%",
                width: "28px",
                height: "28px",
                fontSize: "0.85rem",
                fontWeight: "900",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 10px rgba(244, 63, 94, 0.5)",
                border: "3px solid #090a10",
              }}
            >
              {cart.length}
            </span>
          )}
        </div>

        {/* Cart Popup Overlay */}
        {showCart && (
          <div
            className="glass-card"
            style={{
              position: "fixed",
              bottom: "120px",
              right: "40px",
              width: "380px",
              maxHeight: "70vh",
              padding: "30px",
              zIndex: 1000,
              boxShadow: "var(--shadow-premium)",
              overflowY: "auto",
              animation: "fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border-glass)", paddingBottom: "15px" }}>
              <h3 style={{ margin: 0, fontSize: "1.6rem", fontWeight: "800" }}>Your Order</h3>
              <button 
                onClick={() => setShowCart(false)}
                style={{ background: "transparent", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: "1.2rem" }}
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>Your cart is empty</p>
                <button 
                  className="premium-button" 
                  style={{ marginTop: "20px" }}
                  onClick={() => setShowCart(false)}
                >
                  Start Ordering
                </button>
              </div>
            ) : (
              <>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {cart.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "12px",
                        background: "rgba(255, 255, 255, 0.03)",
                        borderRadius: "12px",
                        border: "1px solid var(--border-glass)",
                      }}
                    >
                      <div>
                        <span style={{ display: "block", fontWeight: "600" }}>{item.name}</span>
                        <span style={{ fontSize: "0.85rem", color: "#60a5fa" }}>Rp {item.price.toLocaleString("id-ID")}</span>
                      </div>
                      <button 
                        onClick={() => handleRemoveFromCart(idx)}
                        style={{
                          background: "rgba(244, 63, 94, 0.1)",
                          border: "none",
                          color: "#f43f5e",
                          width: "30px",
                          height: "30px",
                          borderRadius: "8px",
                          cursor: "pointer",
                          transition: "all 0.2s"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = "rgba(244, 63, 94, 0.2)"}
                        onMouseLeave={(e) => e.currentTarget.style.background = "rgba(244, 63, 94, 0.1)"}
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>

                <div style={{ padding: "15px", borderRadius: "12px", background: "rgba(99, 102, 241, 0.1)", border: "1px solid rgba(99, 102, 241, 0.2)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Total Amount</span>
                    <span style={{ fontSize: "1.4rem", fontWeight: "900", color: "#fff" }}>Rp {totalPrice.toLocaleString("id-ID")}</span>
                  </div>
                </div>

                {/* CUSTOMER FORM */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <h4 style={{ fontSize: "1rem", color: "var(--text-muted)", margin: "10px 0 5px" }}>Delivery Details</h4>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "14px",
                      background: "rgba(0, 0, 0, 0.2)",
                      border: "1px solid var(--border-glass)",
                      borderRadius: "12px",
                      color: "#fff",
                      fontSize: "1rem",
                      transition: "border-color 0.3s",
                      outline: "none"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "var(--accent-primary)"}
                    onBlur={(e) => e.target.style.borderColor = "var(--border-glass)"}
                  />

                  <input
                    type="text"
                    placeholder="Address / Table Number"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "14px",
                      background: "rgba(0, 0, 0, 0.2)",
                      border: "1px solid var(--border-glass)",
                      borderRadius: "12px",
                      color: "#fff",
                      fontSize: "1rem",
                      transition: "border-color 0.3s",
                      outline: "none"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "var(--accent-primary)"}
                    onBlur={(e) => e.target.style.borderColor = "var(--border-glass)"}
                  />
                </div>

                {/* WHATSAPP ORDER BUTTON */}
                <button
                  onClick={handleOrderWhatsApp}
                  className="premium-button"
                  style={{
                    padding: "16px",
                    background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                    boxShadow: "0 10px 20px rgba(34, 197, 94, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    fontSize: "1.1rem",
                    border: "none"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 15px 30px rgba(34, 197, 94, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 10px 20px rgba(34, 197, 94, 0.3)";
                  }}
                >
                  <span style={{ fontSize: "1.4rem" }}>💬</span>
                  Order via WhatsApp
                </button>
              </>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes shine {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </div>
  );
}