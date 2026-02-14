import React from "react"
import { Box } from "../../atomic"
import Divider from "../divider/Divider"

const ContentDivider: React.FC = () => {
  return (
    <Box position={"relative"} style={{zIndex: 4}}>
      <Divider />
    </Box>
  )
}

export default ContentDivider
