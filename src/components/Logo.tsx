import React from 'react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  withText?: boolean
  className?: string
  tone?: 'dark' | 'light'
}

const Logo: React.FC<LogoProps> = ({ size = 'md', withText = true, className = '', tone = 'dark' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <img
        src="/kaamio-logo.jpeg"
        alt="Kaamio Logo"
        className={`${sizeClasses[size]} object-contain rounded-lg`}
      />
      {withText && (
        <span className={`font-display font-bold ${tone === 'light' ? 'text-white' : 'text-gray-900'} ${textSizes[size]}`}>
          Kaamio
        </span>
      )}
    </div>
  )
}

export default Logo