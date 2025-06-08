import React, { AllHTMLAttributes, FC } from 'react'

import Box, { BoxProps } from '../box/Box'

type TextProps = Omit<AllHTMLAttributes<HTMLParagraphElement>, 'className' | 'content'> &
  BoxProps & {
    as?: 'span' | 'p'
    className?: string
    children?: React.ReactNode
  }

const Text: FC<TextProps> = ({ as = 'p', children, lineHeight = 'm', ...props }) => {
  return (
    <Box as={as} {...props} lineHeight={lineHeight}>
      {children}
    </Box>
  )
}

export default Text
