import React from "react"
import * as css from "./Hero.css"
import { Box, Heading, Text } from "../../atomic"
import Image from "../image/Image"

type HeroProps = {
  title?: string
  backgroundImage?: string
  image?: string
}

const Hero: React.FC<HeroProps> = ({
  title,
  backgroundImage,
  image,
  ...props
}) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={css.container}
    >
      {image && <Image src={image} alt={"Logo"} className={css.image} />}
      {title && <Heading as={"h1"}>{title}</Heading>}
    </Box>
  )
}

export default Hero
