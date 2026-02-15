/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react"
import { Box, Container } from "../../atomic"
import Divider from "../divider/Divider"

type DashNewsProps = {
  width?: number
}

const DashNews: React.FC<DashNewsProps> = ({ width = 646 }) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      backgroundColor="granite"
      paddingY={"l-xxxl"}
      style={{ width: "100%" }}
    >
      <Container
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        style={{ width: "100%" }}
      >
        <iframe
          width={"100%"}
          height={190}
          src="https://store.steampowered.com/widget/3625430/"
          style={{ maxWidth: 646, border: "none" }}
        ></iframe>
      </Container>
    </Box>
  )
}

export default DashNews
