export default function Footer() {
  return (
    <footer
      style={{
        padding: "80px 20px 60px",
        background: "var(--bg-main)",
        borderTop: "1px solid var(--border-glass)",
        color: "#fff",
        textAlign: "center",
        position: "relative",
        marginTop: "100px",
      }}
    >
      {/* Decorative Blur */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 2, maxWidth: "var(--container-max)", margin: "0 auto" }}>
        {/* Brand */}
        <h2
          className="brand-font"
          style={{
            margin: 0,
            fontSize: "2rem",
            fontWeight: "900",
            letterSpacing: "-1px",
            background: "linear-gradient(135deg, #fff 0%, #a4b9ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Cafe Kalcer
        </h2>

        <p
          style={{
            marginTop: "12px",
            fontSize: "1rem",
            color: "var(--text-muted)",
            maxWidth: "600px",
            margin: "12px auto 0",
            lineHeight: "1.7",
          }}
        >
          The ultimate spot for co-working, chilling, and enjoying high-quality coffee in the heart of Surabaya.
        </p>

        {/* Social Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          {["instagram", "twitter", "facebook", "tiktok"].map((platform, i) => (
            <a
              key={i}
              href="#"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "15px",
                background: "rgba(255, 255, 255, 0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "1.2rem",
                textDecoration: "none",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                border: "1px solid var(--border-glass)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.background = "var(--grad-primary)";
                e.currentTarget.style.borderColor = "transparent";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.borderColor = "var(--border-glass)";
              }}
            >
              {platform === "instagram" && "📸"}
              {platform === "twitter" && "🐦"}
              {platform === "facebook" && "📘"}
              {platform === "tiktok" && "🎵"}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, var(--border-glass), transparent)",
            margin: "40px 0",
          }}
        />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted)" }}>
            © 2026 Cafe Kalcer — All Rights Reserved
          </p>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted)", fontStyle: "italic" }}>
            Built with ☕ + Code by <span style={{ color: "#fff", fontWeight: "600" }}>Tarzz</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
