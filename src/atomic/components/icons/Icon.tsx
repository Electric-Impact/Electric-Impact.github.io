import React, { FC } from "react"
import { ThemeColors } from "../../styles/theme.css"
import HamburgerIcon from "./HamburgerIcon"
import Instagram from "./Instagram"
import X from "./X"
import Facebook from "./Facebook"

export const iconTypes = ["facebook", "hamburgerIcon", "instagram", "x"]

export type IconType = (typeof iconTypes)[number]

export type IconPropTypes = {
  name: IconType
  color?: keyof ThemeColors
  width?: string | number
  height?: string | number
  className?: string
  style?: React.CSSProperties
}

const Icons: FC<IconPropTypes> = ({
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
    case "hamburgerIcon":
      return (
        <HamburgerIcon
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

export default Icons
