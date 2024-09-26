import "./arrow.css";

const ButtonArrow = () => {
  return (
    <>
      <a className="button__stand__purple" href="">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.3125 0.687501L20.375 0.6875C20.6236 0.6875 20.8621 0.786272 21.0379 0.962087C21.2137 1.1379 21.3125 1.37636 21.3125 1.625V15.6875C21.3125 16.2053 20.8928 16.625 20.375 16.625C19.8572 16.625 19.4375 16.2053 19.4375 15.6875V3.88833L2.28791 21.0379C1.9218 21.404 1.3282 21.404 0.962087 21.0379C0.595971 20.6718 0.595971 20.0782 0.962087 19.7121L18.1117 2.5625L6.3125 2.5625C5.79473 2.5625 5.375 2.14277 5.375 1.625C5.375 1.10723 5.79473 0.687501 6.3125 0.687501Z"
            fill="white"
          />
        </svg>
      </a>
    </>
  );
};

export default ButtonArrow;