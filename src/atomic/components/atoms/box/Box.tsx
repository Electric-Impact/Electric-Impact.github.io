import React, { AllHTMLAttributes, FC } from 'react'

import { Sprinkles, sprinkles } from '../../../styles/sprinkles.css'
import { parseSprinkleProps } from '../helpers/sprinkleHelper'

export type BoxProps = Omit<AllHTMLAttributes<HTMLElement>, 'className' | 'content' | 'height' | 'translate' | 'color' | 'width' | 'cursor'> &
  Sprinkles & {
    className?: string
    as?: 'div' | 'header' | 'footer' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' 
    children?: React.ReactNode
    maxWidth?: number
  }

const Box: FC<BoxProps> = ({ as: Tag = 'div', children, className = '', maxWidth, ...props }) => {
  const { sprinkleProps, otherProps } = parseSprinkleProps(props)
  return (
    <Tag className={`${className} ${sprinkles(sprinkleProps)}`} style={maxWidth ? { maxWidth: maxWidth } : undefined} {...otherProps}>
      {children}
    </Tag>
  )
}

export default Box
