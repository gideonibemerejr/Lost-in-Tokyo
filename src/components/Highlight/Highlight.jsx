import React from 'react'

const Highlight = ({ children, color }) => (
  <span className={`relative highlight highlight-${color}`}>
    <span className="relative z-2">{children}</span>
  </span>
)

export default Highlight
