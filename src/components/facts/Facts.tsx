import React from "react"
import { Box, Container, Text } from "../../atomic"
import { ThemeColors } from "../../atomic/styles/theme.css"
import * as css from "./Facts.css"

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
      <Container className={css.container} {...props}>
        {fact?.map((item, index) => (
          <Box
            key={index}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            gap={"s"}
            className={css.factsContainer}
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
            <Box
              fontSize={"m"}
              fontWeight={"normal"}
              color={"fog"}
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </Box>
        ))}
      </Container>
    </Box>
  )
}

export default Facts
