export default function Header() {
  return (
    <header
      style={{
        padding: "15px 30px",
        background: "rgba(10, 11, 20, 0.8)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid var(--border-glass)",
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.4)",
        position: "sticky",
        top: 0,
        zIndex: 999,
        transition: "all 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo + Title */}
        <div 
          className="brand-font"
          style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "2px", 
            cursor: "pointer",
            transition: "transform 0.3s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          <h1
            style={{
              fontSize: "2.2rem",
              fontWeight: "900",
              margin: 0,
              letterSpacing: "-1px",
              background: "linear-gradient(135deg, #fff 0%, #a4b9ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 10px rgba(164, 185, 255, 0.3))",
            }}
          >
            Cafe Kalcer
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "0.75rem",
              fontWeight: "800",
              color: "var(--accent-secondary)",
              letterSpacing: "4px",
              textTransform: "uppercase",
              opacity: 0.8
            }}
          >
            Cozy • Modern • Affordable
          </p>
        </div>

        {/* Navigation / Actions (Optional) */}
        <div style={{ display: "flex", gap: "20px" }}>
          <button 
            className="premium-button" 
            style={{ padding: "8px 20px", fontSize: "0.9rem" }}
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          >
            Visit Us
          </button>
        </div>
      </div>
    </header>
  );
}
