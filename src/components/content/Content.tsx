import React from "react"
import { Box } from "../../atomic"
import Divider from "../divider/Divider"
import { ThemeColors } from "../../atomic/styles/theme.css"

type ContentProps = {
  backgroundColor?: keyof ThemeColors
  children?: React.ReactNode
}

const Content: React.FC<ContentProps> = ({
  backgroundColor = "black",
  children,
}) => {
  return (
    <Box position={"relative"}>
      <Divider />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        paddingY={"xxl"}
        backgroundColor={backgroundColor}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Content
