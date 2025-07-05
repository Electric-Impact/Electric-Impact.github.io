import React from "react"
import { Box, Text } from "../../atomic"
import Image from "../image/Image"
import Button from "../button/Button"
import * as css from "./Games.css"
import Link from "../link/Link"

type Game = {
  backgroundImage: string
  logo: string
  buttonText: string
  internalLink?: boolean
  buttonLinkInternal?: string
  buttonLinkExternal?: string
}

type GamesProps = {
  game: Game[]
}

const Games: React.FC<GamesProps> = ({ game, ...props }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={{ mobile: "column", tablet: "row" }}
      alignItems={"center"}
      justifyContent={"flex-start"}
      style={{ width: "100%" }}
      {...props}
    >
      {game.map((item, index) => (
        <Link
          key={index}
          href={
            item.internalLink
              ? `?page=${item.buttonLinkInternal ?? ""}`
              : item.buttonLinkExternal ?? ""
          }
          style={{ width: "100%", textDecoration: "none" }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            paddingX={{ mobile: "l", tablet: "xxxl", desktop: "l" }}
            className={css.gameContainer}
            style={{
              backgroundImage: `url(${item.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
            }}
          >
            <Image
              src={item.logo}
              alt={"Logotype"}
              style={{ width: "100%", maxWidth: 420 }}
            />
            <Button
              variant={"primary"}
              cta={false}
              size={"l"}
            >
              <Text as={"span"}>{item.buttonText}</Text>
            </Button>
          </Box>
        </Link>
      ))}
    </Box>
  )
}

export default Games
