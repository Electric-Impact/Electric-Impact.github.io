import React, { FC } from "react"
import { ThemeColors } from "../../styles/theme.css"
import Instagram from "./Instagram"
import X from "./X"
import Facebook from "./Facebook"
import Tiktok from "./Tiktok"
import Discord from "./Discord"
import WishlistSteam from "./WishlistSteam"

export const socialIconTypes = ["facebook", "instagram", "x", "tiktok", "discord", "wishlist-steam"] as const

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
    case "tiktok":
      return (
        <Tiktok className={className} color={color} width={width} height={height} />
      )
    case "discord":
      return (
        <Discord className={className} color={color} width={width} height={height} />
      )
    case "wishlist-steam":
      return (
        <WishlistSteam className={className} color={color} width={width} height={height} />
      )
    default:
      return null
  }
}

export default SocialIcon
