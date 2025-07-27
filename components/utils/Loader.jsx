import React from "react";

const Loader = () => (
  <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "60vh",
    background: "rgba(0, 0, 0, 0.05)", // subtle overlay for light & dark
    backdropFilter: "blur(3px)",
    WebkitBackdropFilter: "blur(3px)",
  }}>
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <div style={{
        width: "48px",
        height: "48px",
        border: "6px solid rgba(0, 0, 0, 0.1)",
        borderTop: "6px solid rgba(0, 0, 0, 0.6)",
        borderRadius: "50%",
        animation: "spin 1s linear infinite"
      }} />
      <span style={{
        marginTop: "20px",
        color: "rgba(0, 0, 0, 0.7)",
        fontWeight: 600,
        letterSpacing: ".03em",
        userSelect: "none",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif"
      }}>
        Loading, please wait…
      </span>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}
      </style>
    </div>
  </div>
);

export default Loader;