export default function MenuCard({ name, price, description, image, onAdd }) {
  return (
    <div
      className="glass-card"
      style={{
        padding: "0",
        textAlign: "left",
        width: "100%",
        maxWidth: "320px",
        height: "450px",
        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: "var(--shadow-premium)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-12px)";
        e.currentTarget.style.boxShadow = "0 30px 60px rgba(0, 0, 0, 0.6)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--shadow-premium)";
        e.currentTarget.style.borderColor = "var(--border-glass)";
      }}
    >
      {/* Product Image Container */}
      <div 
        style={{ 
          width: "100%", 
          height: "200px", 
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img 
          src={image} 
          alt={name} 
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover",
            transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)" 
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        />
        <div style={{
          position: "absolute",
          top: "15px",
          right: "15px",
          background: "rgba(10, 11, 20, 0.6)",
          backdropFilter: "blur(12px)",
          padding: "6px 12px",
          borderRadius: "12px",
          fontSize: "0.75rem",
          fontWeight: "800",
          color: "var(--accent-secondary)",
          border: "1px solid var(--border-glass)",
          letterSpacing: "1px",
          textTransform: "uppercase"
        }}>
          Signature
        </div>
      </div>

      <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1, gap: "10px" }}>
        {/* Name */}
        <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#fff", margin: 0, letterSpacing: "-0.5px" }}>
          {name}
        </h3>

        {/* Description */}
        <p style={{ 
          fontSize: "0.95rem", 
          color: "var(--text-muted)", 
          margin: 0, 
          lineHeight: "1.6",
          flex: 1,
          display: "-webkit-box",
          WebkitLineClamp: "2",
          WebkitBoxOrient: "vertical",
          overflow: "hidden"
        }}>
          {description}
        </p>

        {/* Price & Add Button */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          marginTop: "auto",
          paddingTop: "20px",
          borderTop: "1px solid var(--border-glass)"
        }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>Price</span>
            <span style={{ fontSize: "1.3rem", fontWeight: "900", color: "#60a5fa" }}>
              Rp {price.toLocaleString("id-ID")}
            </span>
          </div>
          
          <button
            className="premium-button"
            style={{ 
              padding: "10px 18px", 
              borderRadius: "12px", 
              fontSize: "0.9rem",
              background: "var(--grad-primary)" 
            }}
            onClick={(e) => {
              e.stopPropagation();
              onAdd();
            }}
          >
            Add +
          </button>
        </div>
      </div>
    </div>
  );
}
