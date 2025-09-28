import React from "react"
import { Box, Container, Text } from "../../atomic"
import { ThemeColors } from "../../atomic/styles/theme.css"
import * as css from "./Facts.css"
import Image from "../image/Image"

type FactsItem = {
  title: string
  description: string
}

type FactsProps = {
  fact: FactsItem[]
  color: keyof ThemeColors
}

const Facts: React.FC<FactsProps> = ({ fact, color, ...props }) => {
  return (
    <Box position={"relative"}>
      <Container
        display={"flex"}
        flexDirection={{ mobile: "column", tablet: "row" }}
        wrap={"wrap"}
        justifyContent={"space-between"}
        gap={{ mobile: "xxl", tablet: 's', desktop: "xl" }}
        {...props}
      >
        {fact?.map((item, index) => (
          <Box
            key={index}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            gap={"s"}
            className={css.container}
          >
            <Text
              fontFamily={"caption"}
              textAlign={"center"}
              fontSize={"l"}
              fontWeight={"normal"}
              color={color ?? "white"}
              style={{ textTransform: "uppercase" }}
            >
              {item.title}
            </Text>
            <Text
              textAlign={"center"}
              fontSize={"m"}
              fontWeight={"normal"}
              color={"fog"}
            >
              {item.description}
            </Text>
          </Box>
        ))}
      </Container>
      {/* <Box position={"absolute"}>
        <Image src={"/assets/images/helga.webp"} alt={"The character Helga from the game Dash n smash"}  />
      </Box> */}
    </Box>
  )
}

export default Facts
