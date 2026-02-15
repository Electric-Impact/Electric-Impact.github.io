import React from "react"
import { Box, Text } from "../../atomic"

type GameInfoProps = {
  genre: string
  releaseDate: string
  platform: string
}

const GameInfo: React.FC<GameInfoProps> = ({
  genre,
  releaseDate,
  platform,
  ...props
}) => {
  return (
    <Box style={{ width: "100%" }} {...props}>
      <Box
        display={"flex"}
        flexDirection={{ mobile: "column", tablet: "row" }}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        gap={{ mobile: "l", tablet: "xl", desktop: "xxxl" }}
        style={{ width: "100%" }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          gap={"xs"}
        >
          <Text fontFamily={"caption"} color="fog">
            Genre:
          </Text>
          <Text fontFamily={"caption"} color="white">
            {genre}
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          gap={"xs"}
        >
          <Text fontFamily={"caption"} color="fog">
            Release Date:
          </Text>
          <Text fontFamily={"caption"} color="white">
            {releaseDate}
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          gap={"xs"}
        >
          <Text fontFamily={"caption"} color="fog">
            Platform:
          </Text>
          <Text fontFamily={"caption"} color="white">
            {platform}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default GameInfo
