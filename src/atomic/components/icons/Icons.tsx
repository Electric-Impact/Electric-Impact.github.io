import { FC } from "react"
import { ThemeColors } from "../../styles/theme.css"
import Arrow from "./Arrow"
import BlixtDivider from "./BlixtDivider"
import ArrowRight from "./ArrowRight"

export const iconTypes = ["arrow", "blixt-divider", "arrow-right"] as const

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
    case "arrow":
      return (
        <Arrow
          className={className}
          color={color}
          width={width}
          height={height}
        />
      )
    case "blixt-divider":
      return (
        <BlixtDivider
          className={className}
          color={color}
          width={width}
          height={height}
          style={style}
        />
      )
    case "arrow-right":
      return (
        <ArrowRight
          className={className}
          color={color}
          width={width}
          height={height}
        />
      )
    default:
      return null
  }
}

export default Icons
