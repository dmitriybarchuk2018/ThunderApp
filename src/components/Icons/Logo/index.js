import React, { Component } from 'react'


const Logo = ({className = 'icon'}) => (
  <svg
    className={className}
    width="55"
    height="28"
    viewBox="0 0 55 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M-1.90735e-06 0L27.5315 27.5315H17.632L-1.90735e-06 9.8995V0Z" fill="#737373"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.000190735 16.5317L7 23.5315V27.5315L0.000190735 27.5315V16.5317Z" fill="#737373"
    />
    <g opacity="0.5">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 0L41.5315 27.5315H31.632L14 9.8995V0Z" fill="#737373"
      />
    </g>
    <g opacity="0.2">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 0L54.5315 27.5315H44.632L27 9.8995V0Z"
        fill="#737373"
      />
    </g>
  </svg>
)
export default Logo