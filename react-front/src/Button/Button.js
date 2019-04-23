import React from 'react';
import './Button.css';

const Button = ({buttonOnClick, buttonClicked}) => {
  return(
    <div className="main__button--container">
      <button
        className={buttonClicked ? 'main__button main__button--extended' : 'main__button'}
        onClick={buttonOnClick}
      >
        Repos List
      </button>
    </div>
  )
};

export default Button;
