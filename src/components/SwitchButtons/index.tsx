import React from "react";
import "/src/components/SwitchButtons/style.css";

interface SwitchButtonsProps {
  onNext: () => void;
  onPrev: () => void;
}

const SwitchButtons: React.FC<SwitchButtonsProps> = ({ onNext, onPrev }) => {
  return (
    <div className="switch__block">
      <button onClick={onPrev} className="switch__button">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.25 8.5L12.75 17L21.25 25.5"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button onClick={onNext} className="switch__button">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.75 8.5L21.25 17L12.75 25.5"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default SwitchButtons;
