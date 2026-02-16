/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react"
import { Box } from "../../atomic"
import { useMediaQuery } from "react-responsive"
import { eiTheme } from "../../atomic/styles/theme.css"

type DashNewsProps = {
  width?: number
  height?: number
}

const DashNews: React.FC<DashNewsProps> = ({ width = 646, height = 190 }) => {
  const isDesktop = useMediaQuery({ minWidth: eiTheme.breakpoints.tablet })

  return (
    <>
      {isDesktop ? (
        <iframe
          width={width}
          height={height}
          src="https://store.steampowered.com/widget/3625430/"
          style={{ border: "none" }}
        ></iframe>
      ) : (
        <Box style={{ width: "100%" }}>
          <iframe
            width={340}
            height={height}
            src="https://store.steampowered.com/widget/3625430/"
            style={{ maxWidth: width, border: "none" }}
          ></iframe>
        </Box>
      )}
    </>
  )
}

export default DashNews
