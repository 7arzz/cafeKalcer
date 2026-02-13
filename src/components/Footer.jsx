export default function Footer() {
  return (
    <footer
      style={{
        padding: "60px 20px 40px",
        background: "linear-gradient(135deg, #1e1e2f, #2c2c54)",
        color: "#fff",
        textAlign: "center",
        position: "relative",
        marginTop: "80px",
      }}
    >
      {/* Glow background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08), transparent 40%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Logo / title */}
        <h2
          style={{
            margin: 0,
            fontSize: "1.8rem",
            fontWeight: "700",
            letterSpacing: "1px",
          }}
        >
          ☕ Cafe Kalcer
        </h2>

        <p
          style={{
            marginTop: "8px",
            fontSize: "0.95rem",
            color: "#ccc",
          }}
        >
          Tempat nongkrong + ngoding paling santai di Surabaya
        </p>

        {/* Social */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            marginTop: "25px",
            marginBottom: "30px",
          }}
        >
          {["📘", "📷", "🐦", "🎵"].map((icon, i) => (
            <a
              key={i}
              href="#"
              style={{
                fontSize: "1.6rem",
                textDecoration: "none",
                transition: "all 0.25s",
                display: "inline-block",
                filter: "grayscale(20%)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px) scale(1.2)";
                e.currentTarget.style.filter = "grayscale(0%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.filter = "grayscale(20%)";
              }}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Info grid */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
            fontSize: "0.95rem",
            color: "#ddd",
            marginBottom: "25px",
          }}
        >
          <span>📍 Surabaya, Indonesia</span>
          <span>📞 +62 812-3456-7890</span>
          <span>✉️ hello@cafekalcer.com</span>
          <span>🕒 09.00 - 23.00</span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "80px",
            height: "3px",
            background: "linear-gradient(90deg,#667eea,#764ba2)",
            margin: "20px auto",
            borderRadius: "5px",
          }}
        />

        {/* Copyright */}
        <p
          style={{
            margin: 0,
            fontSize: "0.85rem",
            color: "#aaa",
            letterSpacing: "0.5px",
          }}
        >
          © 2026 Cafe Kalcer — All Rights Reserved
        </p>

        {/* Tagline */}
        <p
          style={{
            marginTop: "6px",
            fontSize: "0.8rem",
            color: "#888",
            fontStyle: "italic",
          }}
        >
          Built with ☕ + code by Tarzz
        </p>
      </div>
    </footer>
  );
}
