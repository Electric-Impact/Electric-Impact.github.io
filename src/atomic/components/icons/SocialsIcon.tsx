import React, { FC } from "react"
import { ThemeColors } from "../../styles/theme.css"
import Instagram from "./Instagram"
import X from "./X"
import Facebook from "./Facebook"

export const socialIconTypes = ["facebook", "instagram", "x"]

export type SocialIconType = (typeof socialIconTypes)[number]

export type SocialIconPropTypes = {
  name: SocialIconType
  color?: keyof ThemeColors
  width?: string | number
  height?: string | number
  className?: string
  style?: React.CSSProperties
}

const SocialIcon: FC<SocialIconPropTypes> = ({
  name,
  color,
  className,
  width,
  height,
  style,
}) => {
  switch (name) {
    case "facebook":
      return (
        <Facebook
          className={className}
          color={color}
          width={width}
          height={height}
        />
      )
    case "instagram":
      return (
        <Instagram
          className={className}
          color={color}
          width={width}
          height={height}
        />
      )
    case "x":
      return (
        <X className={className} color={color} width={width} height={height} />
      )
    default:
      return null
  }
}

export default SocialIcon
