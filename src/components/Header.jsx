export default function Header() {
  return (
    <header
      style={{
        padding: "30px 20px",
        background: "linear-gradient(135deg, #4935fd 0%, #2f00ff 100%)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo + Title */}
        <div>
          <h1
            style={{
              fontSize: "2.3rem",
              fontWeight: "800",
              color: "#d5dce4",
              margin: 0,
              letterSpacing: "1px",
            }}
          >
            Cafe Kalcer
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "0.9rem",
              color: "#76afe7",
            }}
          >
            Cozy • Modern • Affordable
          </p>
        </div>
      </div>
    </header>
  );
}
