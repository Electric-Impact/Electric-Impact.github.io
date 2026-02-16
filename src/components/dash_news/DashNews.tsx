/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react"

type DashNewsProps = {
  width?: number
  height?: number
}

const DashNews: React.FC<DashNewsProps> = ({ width = 646, height = 190 }) => {
  return (
    <iframe
      width={width}
      height={height}
      src="https://store.steampowered.com/widget/3625430/"
      style={{ border: "none" }}
    ></iframe>
  )
}

export default DashNews
