import React, { AllHTMLAttributes, FC } from 'react'
import { Box } from '../../atomic'
import { BoxProps } from '../../atomic/components/atoms/box/Box'

type TextComponentProps = Omit<AllHTMLAttributes<HTMLParagraphElement>, 'className' | 'content'> &
  BoxProps & {
    as?: 'span' | 'p'
    className?: string
    children?: React.ReactNode
  }

const TextComponent: FC<TextComponentProps> = ({ as = 'p', children, lineHeight = 'm', ...props }) => {
  return (
    <Box as={as} lineHeight={lineHeight} {...props} dangerouslySetInnerHTML={{ __html: children as string }} />
  )
}

export default TextComponent
