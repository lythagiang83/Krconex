import React from "react";

export const Input = ({ className = "", style }) => {
  return (
    <div className={`a-input ${className}`}>
      <div className="a-input__wrapper">
        <div className="a-input__search">
          <input
            id="search"
            type="search"
            placeholder="Enter Your Email "
            autocomplete="off"
          />
          <div className="a-input__icon"><img src="images/icon/sent.png" alt="icon sent" /></div>
        </div>
      </div>
    </div>
  );
};
