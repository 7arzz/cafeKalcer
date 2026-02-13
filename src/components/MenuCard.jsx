export default function MenuCard({ name, price, description, onAdd }) {
  return (
    <div
      style={{
        background: "linear-gradient(145deg, #ffffff, #f5f5f5)",
        border: "none",
        borderRadius: "16px",
        padding: "24px",
        textAlign: "center",
        width: "100%",
        maxWidth: "320px",
        boxShadow:
          "0 8px 16px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow =
          "0 12px 24px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 8px 16px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)";
      }}
    >
      {/* Decorative accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
        }}
      ></div>

      {/* Coffee icon decoration */}
      <div
        style={{
          fontSize: "3rem",
          marginBottom: "12px",
          filter: "grayscale(20%)",
        }}
      >
        ☕
      </div>

      {/* Name */}
      <h3
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          color: "#2c3e50",
          margin: "0 0 8px 0",
          letterSpacing: "0.5px",
        }}
      >
        {name}
      </h3>

      {/* Description */}
      {description && (
        <p
          style={{
            fontSize: "0.9rem",
            color: "#180ea8",
            margin: "0 0 16px 0",
            lineHeight: "1.5",
            minHeight: "45px",
          }}
        >
          {description}
        </p>
      )}

      {/* Price */}
      <div
        style={{
          marginTop: "16px",
          paddingTop: "16px",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <p
          style={{
            fontSize: "1.75rem",
            fontWeight: "800",
            color: "#667eea",
            margin: 0,
            letterSpacing: "0.5px",
          }}
        >
          Rp {price.toLocaleString("id-ID")}
        </p>
      </div>

      {/* Add to cart button */}
      <button
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "#ffffff",
          border: "none",
          borderRadius: "8px",
          fontSize: "1rem",
          fontWeight: "600",
          cursor: "pointer",
          width: "100%",
          transition: "opacity 0.2s ease, transform 0.2s ease",
          boxShadow: "0 4px 8px rgba(102, 126, 234, 0.3)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "0.9";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "1";
          e.currentTarget.style.transform = "scale(1)";
        }}
        onClick={onAdd}
      >
        Add to Cart
      </button>
    </div>
  );
}
