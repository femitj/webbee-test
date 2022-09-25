import React from 'react';

const Menu = (props: any) => {
  const { color } = props;
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        stroke={color || '#fff'}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3 7h18M3 12h18M3 17h18'
      ></path>
    </svg>
  );
};

export default Menu;
