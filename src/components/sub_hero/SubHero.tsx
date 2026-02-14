import React from "react"
import { Box, Container, Heading, Text } from "../../atomic"
import Content from "../content/Content"
import { ThemeColors } from "../../atomic/styles/theme.css"
import Button from "../button/Button"
import Image from "../image/Image"
import * as css from "./SubHero.css"
import {
  CharacterType,
  getCharacterImage,
} from "../../hooks/chooseCharacterImage"

type SubHeroProps = {
  backgroundColor?: keyof ThemeColors
  title: string
  intro: string
  buttonLink: string
  buttonLabel: string
  internalLink?: boolean
  character?: CharacterType
  flipCharacter?: boolean
}

const SubHero: React.FC<SubHeroProps> = ({
  title,
  intro,
  backgroundColor = "black",
  buttonLink,
  buttonLabel,
  internalLink = false,
  character,
  flipCharacter = false,
  ...props
}) => {
  return (
    <Content backgroundColor={backgroundColor}>
      <Container
        display={"flex"}
        flexDirection={{ mobile: "column", desktop: "row-reverse" }}
        alignItems={"center"}
        justifyContent={"center"}
        paddingY={"xl"}
        paddingBottom={{ mobile: "xxxl", desktop: "xl" }}
        gap={"l"}
        style={{ width: "100%", maxWidth: 1300 }}
        {...props}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"xxxl"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"l"}
          >
            <Heading as="h1" color="white" textAlign={"center"}>
              {title}
            </Heading>
            <Text
              fontFamily={"primary"}
              color="white"
              fontWeight={"medium"}
              textAlign={"center"}
              fontSize={"m"}
              style={{ maxWidth: 800 }}
            >
              {intro}
            </Text>
          </Box>
          <Button
            internalLink={internalLink}
            variant={"primary"}
            cta
            size={"l"}
            link={buttonLink}
          >
            {buttonLabel}
          </Button>
        </Box>
        {character && (
          <Image
            src={getCharacterImage(character)}
            alt={`Dash & smash character ${character}`}
            className={css.characterImage}
            style={{ transform: flipCharacter ? "scaleX(-1)" : "none" }}
          />
        )}
      </Container>
    </Content>
  )
}

export default SubHero
