import { FC } from "react";
import "/src/components/CardsQuestions/style.css";

interface Props {
  title: string;
  location: string;
  description: string;
}

const Card: FC<Props> = ({ title, location, description }) => {
  return (
    <div className="card">
      <div className="name__socials__block">
        <div>
          <p className="title__title__card">{title}</p>
          <p className="location__title__card">{location}</p>
        </div>

        <div className="icons__item">
          <a className="icon__item__logo" href="/">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_44_1025)">
                <path
                  d="M20.3335 10C20.3335 4.47715 15.8563 0 10.3335 0C4.81064 0 0.333496 4.47715 0.333496 10C0.333496 14.9912 3.99033 19.1283 8.771 19.8785V12.8906H6.23193V10H8.771V7.79688C8.771 5.29063 10.264 3.90625 12.5481 3.90625C13.6419 3.90625 14.7866 4.10156 14.7866 4.10156V6.5625H13.5257C12.2835 6.5625 11.896 7.3334 11.896 8.125V10H14.6694L14.2261 12.8906H11.896V19.8785C16.6767 19.1283 20.3335 14.9912 20.3335 10Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_44_1025">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.333496)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a className="icon__item__logo" href="/">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_44_1028)">
                <path
                  d="M6.62529 18.1251C14.1706 18.1251 18.2987 11.8724 18.2987 6.45167C18.2987 6.27589 18.2948 6.0962 18.287 5.92042C19.0901 5.33967 19.7831 4.62033 20.3335 3.7962C19.5856 4.12896 18.7915 4.34627 17.9784 4.44074C18.8346 3.92755 19.4756 3.12135 19.7827 2.17159C18.9773 2.64892 18.0965 2.98563 17.178 3.1673C16.5592 2.50976 15.741 2.07439 14.8499 1.9285C13.9588 1.78261 13.0445 1.93433 12.2483 2.3602C11.4521 2.78607 10.8183 3.46238 10.445 4.28455C10.0717 5.10672 9.97969 6.02897 10.1831 6.9087C8.55224 6.82686 6.95678 6.40321 5.50015 5.6652C4.04352 4.9272 2.75824 3.89132 1.72764 2.62472C1.20383 3.52782 1.04354 4.59649 1.27936 5.61353C1.51517 6.63057 2.12938 7.51966 2.99717 8.10011C2.34569 8.07943 1.70848 7.90402 1.13818 7.58839V7.63917C1.1376 8.58691 1.46524 9.50561 2.06542 10.2391C2.6656 10.9726 3.50127 11.4756 4.43037 11.6626C3.82688 11.8277 3.19348 11.8518 2.5792 11.7329C2.84138 12.548 3.35147 13.2609 4.03831 13.7721C4.72514 14.2833 5.55443 14.5673 6.41045 14.5845C4.95718 15.726 3.16197 16.3452 1.31396 16.3423C0.986235 16.3418 0.658829 16.3217 0.333496 16.2821C2.21088 17.4866 4.39477 18.1263 6.62529 18.1251Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_44_1028">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.333496)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a className="icon__item__logo" href="/">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_44_1031)">
                <path
                  d="M18.853 0H1.81006C0.993652 0 0.333496 0.644531 0.333496 1.44141V18.5547C0.333496 19.3516 0.993652 20 1.81006 20H18.853C19.6694 20 20.3335 19.3516 20.3335 18.5586V1.44141C20.3335 0.644531 19.6694 0 18.853 0ZM6.26709 17.043H3.29834V7.49609H6.26709V17.043ZM4.78271 6.19531C3.82959 6.19531 3.06006 5.42578 3.06006 4.47656C3.06006 3.52734 3.82959 2.75781 4.78271 2.75781C5.73193 2.75781 6.50146 3.52734 6.50146 4.47656C6.50146 5.42188 5.73193 6.19531 4.78271 6.19531ZM17.3765 17.043H14.4116V12.4023C14.4116 11.2969 14.3921 9.87109 12.8687 9.87109C11.3257 9.87109 11.0913 11.0781 11.0913 12.3242V17.043H8.13037V7.49609H10.9741V8.80078H11.0132C11.4077 8.05078 12.3765 7.25781 13.8179 7.25781C16.8218 7.25781 17.3765 9.23438 17.3765 11.8047V17.043Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_44_1031">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.333496)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
      <div className="stars">
        <img src="/src/assets/images/star__testimonial.svg" alt="Star" />
        <img src="/src/assets/images/star__testimonial.svg" alt="Star" />
        <img src="/src/assets/images/star__testimonial.svg" alt="Star" />
        <img src="/src/assets/images/star__testimonial.svg" alt="Star" />
        <img src="/src/assets/images/star__testimonial.svg" alt="Star" />
      </div>
      <p className="description__title__card">{description}</p>
    </div>
  );
};

export default Card;
