import React from 'react'

import './Button.css'

function Button({children,fsize,px,p}) {
  return (
    <button
    style={{paddingInline:px,fontSize:fsize}}
    >{children}</button>
  )
}

export default Button