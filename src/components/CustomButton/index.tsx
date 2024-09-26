import React from "react";

interface ButtonProps {
  title: string;
}

const CustomButton: React.FC<ButtonProps> = ({ title }) => {
  return (
    <button
      style={{
        padding: "15px 24px",
        border: "1px solid var(--border-color)",
        borderRadius: "5px",
        backgroundColor: "#1c1c21",
        color: "white",
      }}
    >
      <h3>{title}</h3>
    </button>
  );
};

export default CustomButton;
