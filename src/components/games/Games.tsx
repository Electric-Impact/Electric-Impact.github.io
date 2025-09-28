import React from "react"
import { Box, Text } from "../../atomic"
import Image from "../image/Image"
import Button from "../button/Button"
import * as css from "./Games.css"
import Link from "../link/Link"
import { themeVars } from "../../atomic/styles/theme.css"

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
          className={css.zoomContainer}
        >
          <Button
              variant={"primary"}
              cta={false}
              size={"l"}
              style={{ zIndex: 10, position: 'absolute', bottom: 130, left: '50%', transform: 'translateX(-50%)' }}
            >
              <Text as={"span"}>{item.buttonText}</Text>
            </Button>
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
            
          </Box>
          
        </Link>
      ))}
    </Box>
  )
}

export default Games
