import React from 'react'

export const Button = ({ children, onClick, variant = 'default', className = '', ...props }) => {
  // Set up styles for different variants
  const baseStyles = 'px-4 py-2 font-semibold rounded transition-colors duration-300 focus:outline-none'
  const variantStyles = {
    default: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    ghost: 'bg-transparent text-blue-500 hover:bg-blue-100'
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
    