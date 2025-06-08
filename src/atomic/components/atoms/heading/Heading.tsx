import React, { AllHTMLAttributes, FC } from 'react'

import Box, { BoxProps } from '../box/Box'

export type HeadingProps = Omit<AllHTMLAttributes<HTMLHeadingElement>, 'className' | 'content'> &
  BoxProps & {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    className?: string
    children?: React.ReactNode
  }

const Heading: FC<HeadingProps> = ({ as = 'h1', lineHeight = 'm', fontSize = 'xxl', children, ...props }) => {
  return (
    <Box as={as} lineHeight={lineHeight} fontSize={fontSize} {...props}>
      {children}
    </Box>
  )
}

export default Heading
