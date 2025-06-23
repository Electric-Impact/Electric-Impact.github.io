import { FC } from "react"
import { ThemeColors } from "../../styles/theme.css"
import Arrow from "./Arrow"

export const iconTypes = ["arrow"]

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
    default:
      return null
  }
}

export default Icons
