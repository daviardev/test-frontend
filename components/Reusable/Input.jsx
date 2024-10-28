'use client'

import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from 'react'

export default function InputAuth ({ id, placeholder, type, name, onChange, value, disabled }) {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'

  return (
    <div className='relative'>
      <input
        id={id}
        type={isPassword && showPassword ? 'text' : type}
        name={name}
        disabled={disabled}
        className='mr-2.5 mb-2 h-full min-h-11 w-full rounded-lg border px-4 py-3 text-sm font-medium text-title placeholder:text-description outline outline-0 outline-transparent transition-[300ms_ease_outline,300ms_ease_border-color] focus:border-hoverBlue focus:outline-offset-8 pr-10'
        autoCorrect='off'
        required
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        style={
          isPassword && showPassword
            ? {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }
            : {}
        }
      />
      {isPassword && (
        <button
          type='button'
          onClick={() => setShowPassword(!showPassword)}
          className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500'
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      )}
    </div>
  )
}
