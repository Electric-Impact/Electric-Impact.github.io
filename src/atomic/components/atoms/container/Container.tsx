import React, { FC } from 'react'
import { container } from './Container.css'
import Box, { BoxProps } from '../box/Box'

type ContainerProps = {
  customWidth?: number
} & BoxProps

const Container: FC<ContainerProps> = ({ children, className, marginX = 'auto', paddingX = 'l', customWidth, ...props }) => {
  return (
    <Box
      className={`${container[customWidth ? 'custom' : 'default']} ${className}`}
      paddingX={paddingX}
      marginX={marginX}
      style={customWidth ? { maxWidth: customWidth } : {}}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Container
