//@flow
import React from 'react';
import './Button.css';

interface Props {
  buttonOnClick(): void,
  buttonClicked: boolean
}

const Button = ({buttonOnClick, buttonClicked}: Props) => {
  return(
    <div className='main__button--container'>
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
