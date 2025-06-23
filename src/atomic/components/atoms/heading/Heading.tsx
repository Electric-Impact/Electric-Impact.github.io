import React, { AllHTMLAttributes, FC } from "react"

import Box, { BoxProps } from "../box/Box"

export type HeadingProps = Omit<
  AllHTMLAttributes<HTMLHeadingElement>,
  "className" | "content"
> &
  BoxProps & {
    as: "h1" | "h2" | "h3" | "h4"
    className?: string
    children?: React.ReactNode
  }

const Heading: FC<HeadingProps> = ({
  as = "h1",
  lineHeight = "m",
  fontSize,
  children,
  ...props
}) => {
  // Set default fontSize based on the 'as' prop
  let defaultFontSize = fontSize

  switch (as) {
    case "h1":
      defaultFontSize = "xxxl"
      break
    case "h2":
      defaultFontSize = "xxl"
      break
    case "h3":
      defaultFontSize = "xl"
      break
    case "h4":
      defaultFontSize = "l"
      break
    default:
      defaultFontSize = "xxxl"
  }

  return (
    <Box as={as} lineHeight={lineHeight} fontSize={defaultFontSize} {...props}>
      {children}
    </Box>
  )
}

export default Heading
