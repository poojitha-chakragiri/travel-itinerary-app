import React from "react";

function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        padding: "16px 0",
        textAlign: "center",
        background: "#f1f1f1",
        color: "#888",
        fontSize: "1rem",
        marginTop: "auto",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      © {new Date().getFullYear()} Trip Planner. All rights reserved.
    </footer>
  );
}

export default Footer;
