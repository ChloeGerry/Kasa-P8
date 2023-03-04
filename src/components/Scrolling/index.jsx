import './Scrolling.css';
import '../../style/variables.css';
import { useState } from 'react';

const ScrollingBar = ({ kasaValue, valueText }) => {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <article>
      <div className="scrolling__valueWrapper">
        <p className="scrolling__value">{kasaValue}</p>
        <svg
          onClick={() => setIsOpen(false)}
          className="srolling__downArrow"
          width="25"
          height="15"
          viewBox="0 0 25 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="scrolling__textValueWrapper">
        <p className="scrolling__textValue">{valueText}</p>
      </div>
    </article>
  ) : (
    <article>
      <div className="scrolling__valueWrapper">
        <p className="scrolling__value">{kasaValue}</p>
        <svg
          onClick={() => setIsOpen(true)}
          className="srolling__downArrow"
          width="25"
          height="15"
          viewBox="0 0 25 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z"
            fill="white"
          />
        </svg>
      </div>
    </article>
  );
};

export default ScrollingBar;
