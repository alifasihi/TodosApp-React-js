import React from 'react'

export default function DeleteBtn({className,onClick:onClickHandler}) {
  return (
    <>
        <button onClick={onClickHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 text-red-600 ${className??''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
    </>
  )
}
