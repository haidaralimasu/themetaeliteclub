import React from "react";

const TopSection = () => {
  return (
    <div
      style={{
        height: "120vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{ height: "100%", width: "100%", marginTop: 100 }}
        src="assets/logo.png"
      />
    </div>
  );
};

export default TopSection;
