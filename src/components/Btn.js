import React from 'react'

export default function Btn({isLoading, handleClick, type}) {
  return (
    <button
    className={`btn btn-block ${type}-btn`}
    disabled={isLoading}
    onClick={handleClick}
  >
    {isLoading ? 'loading...' : type}
  </button>
  )
}
