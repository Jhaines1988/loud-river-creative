import React from 'react';

const CodeIcon = () => {
  return (
    <svg
      width='40'
      height='40'
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <circle cx='20' cy='20' r='20' fill='white' />
      <rect
        x='27'
        y='18'
        width='4'
        height='4'
        rx='2'
        transform='rotate(90 27 18)'
        fill='black'
        stroke='black'
        stroke-width='2'
      />
      <rect
        x='27'
        y='26'
        width='4'
        height='4'
        rx='2'
        transform='rotate(90 27 26)'
        fill='black'
        stroke='black'
        stroke-width='2'
      />
      <rect
        x='12'
        y='16'
        width='4'
        height='4'
        rx='2'
        transform='rotate(-90 12 16)'
        fill='black'
        stroke='black'
        stroke-width='2'
      />
      <path
        d='M14 15V24C14 25.8856 14 26.8284 14.5858 27.4142C15.1716 28 16.1144 28 18 28H23'
        stroke='black'
        stroke-width='2'
      />
      <path
        d='M14 16V16C14 17.8856 14 18.8284 14.5858 19.4142C15.1716 20 16.1144 20 18 20H23'
        stroke='black'
        stroke-width='2'
      />
    </svg>
  );
};

export default CodeIcon;
