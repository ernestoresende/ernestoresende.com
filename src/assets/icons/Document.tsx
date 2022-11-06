import * as React from 'react'

export const Document = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M428 224H288a48 48 0 0 1-48-48V36a4 4 0 0 0-4-4h-92a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h224a64 64 0 0 0 64-64V228a4 4 0 0 0-4-4z"
      stroke="none"
    />
    <path
      d="M419.22 188.59 275.41 44.78a2 2 0 0 0-3.41 1.41V176a16 16 0 0 0 16 16h129.81a2 2 0 0 0 1.41-3.41z"
      stroke="none"
    />
  </svg>
)
