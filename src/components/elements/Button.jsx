import React from 'react'

import './Button.css'

function Button({className,children,fsize,px,p}) {
  return (
    <button className={className}
    >{children}</button>
  )
}

export default Button