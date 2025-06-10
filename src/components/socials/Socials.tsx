import React from "react"
import SocialIcon, {
  SocialIconType,
} from "../../atomic/components/icons/SocialsIcon"
import Box from "../../atomic/components/atoms/box/Box"
import { ThemeColors } from "../../atomic/styles/theme.css"
import Link from "../link/Link"
import * as css from "./Socials.css"

export type SocialLink = {
  label: string
  link: string
  icon: SocialIconType
  color: keyof ThemeColors
}

type SocialLinkProps = {
  className?: string
  socials: SocialLink[]
  size?: "s" | "m" | "l"
}

const Socials: React.FC<SocialLinkProps> = ({
  className,
  socials,
  size = "m",
  ...props
}) => {
  let iconSize = 24

  switch (size) {
    case "s":
      iconSize = 16
      break
    case "m":
      iconSize = 24
      break
    case "l":
      iconSize = 32
      break
    default:
      iconSize = 24
  }

  return (
    <Box
      className={`${className}`}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"flex-start"}
      gap={"xs"}
      {...props}
    >
      {socials?.map((icon, index) => (
        <Link
          key={index}
          href={icon.link}
          target={"_blank"}
          rel={"noreferrer"}
          aria-label={icon.label}
          className={css.socialLink}
        >
          <SocialIcon
            name={icon.icon}
            width={iconSize}
            height={iconSize}
            color={`${icon.color}`}
          />
        </Link>
      ))}
    </Box>
  )
}

export default Socials
