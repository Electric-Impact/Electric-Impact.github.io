import React from "react"
import * as css from "./Hero.css"
import { Box, Heading } from "../../atomic"
import Image from "../image/Image"
import { eiTheme, ThemeColors } from "../../atomic/styles/theme.css"
import { useMediaQuery } from "react-responsive"

type HeroProps = {
  type: "main" | "secondary"
  title?: string
  backgroundImage?: string
  image?: string
  color?: keyof ThemeColors
  blackwhite?: boolean
}

const Hero: React.FC<HeroProps> = ({
  type = "main",
  title,
  color = "white",
  backgroundImage,
  image,
  blackwhite = true,
  ...props
}) => {
  
  const isDesktop = useMediaQuery({ minWidth: eiTheme.breakpoints.desktop })
  
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={type === "secondary" ? "flex-end" : "center"}
      paddingBottom={type === "secondary" ? "l" : "none"}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: blackwhite && isDesktop ? "grayscale(1)" : "none",
      }}
      className={css.container[type]}
    >
      {image && <Image src={image} alt={"Logo"} className={css.image[type]} />}
      {title && (
        <Heading as={"h1"} color={color}>
          {title}
        </Heading>
      )}
    </Box>
  )
}

export default Hero
