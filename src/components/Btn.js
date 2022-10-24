import React from 'react'

export default function Btn({isLoading, handleClick, name}) {
  return (
    <button
    type='button'
    className={`btn btn-block ${name}-btn`}
    disabled={isLoading}
    onClick={handleClick}
  >
    {isLoading ? 'loading...' : name}
  </button>
  )
}
