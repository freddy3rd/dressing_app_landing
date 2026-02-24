import React from "react";

export const PrevButton = ({ children, disabled, ...restProps }) => {
  return (
    <button
      className={
        "embla__button embla__button--prev" +
        (disabled ? " embla__button--disabled" : "")
      }
      type="button"
      {...restProps}
    >
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0..."
        />
      </svg>
      {children}
    </button>
  );
};

export const NextButton = ({ children, disabled, ...restProps }) => {
  return (
    <button
      className={
        "embla__button embla__button--next" +
        (disabled ? " embla__button--disabled" : "")
      }
      type="button"
      {...restProps}
    >
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805..."
        />
      </svg>
      {children}
    </button>
  );
};