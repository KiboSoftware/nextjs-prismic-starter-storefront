import React from 'react'
import { Button as MaterialButton } from '@mui/material'
import { useNode } from '@craftjs/core'
export const Button = ({ size, variant, color, children }: any) => {
  const {
    connectors: { connect, drag },
  } = useNode()

  return (
    <MaterialButton
      ref={(ref: any) => connect(drag(ref))}
      size={size}
      variant={variant}
      color={color}
    >
      {children}
    </MaterialButton>
  )
}
