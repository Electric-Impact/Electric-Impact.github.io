import React, { FC } from 'react'
import { container } from './Container.css'
import Box, { BoxProps } from '../box/Box'

const Container: FC<BoxProps> = ({ children, className, marginX = 'auto', paddingX = 'l', maxWidth, ...props }) => {
  return (
    <Box
      className={`${container[maxWidth ? 'custom' : 'default']} ${className}`}
      paddingX={paddingX}
      marginX={marginX}
      style={maxWidth ? { maxWidth: maxWidth } : {}}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Container
