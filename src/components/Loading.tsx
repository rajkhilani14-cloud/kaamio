import React from 'react'

const Loading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <div className="relative">
        <img
          src="/kaamio-logo.jpeg"
          alt="Kaamio Logo"
          className="w-16 h-16 object-contain rounded-lg animate-pulse"
        />
        <div className="absolute inset-0 rounded-lg bg-teal-500 opacity-20 animate-ping"></div>
      </div>
      <div className="mt-4 text-center">
        <div className="text-gray-900 font-medium">Kaamio Premium</div>
        <div className="text-sm text-gray-500 mt-1">Loading your premium experience...</div>
      </div>
    </div>
  )
}

export default Loading