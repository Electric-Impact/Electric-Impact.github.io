import React, { FC } from "react"

import { IconBaseProps } from "./Base"
import Box from "../atoms/box/Box"

const X: FC<IconBaseProps> = ({
  width = "100%",
  height = "100%",
  ...props
}) => {
  return (
    <Box {...props}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 0C0.895431 0 0 0.89543 0 2V22C0 23.1046 0.89543 24 2 24H22C23.1046 24 24 23.1046 24 22V2C24 0.895431 23.1046 0 22 0H2ZM19.4748 4L13.5225 10.7757L19.9933 20H15.2325L10.8735 13.787L5.41669 20H4.00666L10.2484 12.8955L4.00666 4H8.76749L12.8942 9.88203L18.0648 4H19.4748ZM8.09179 5.04127H5.9256L15.897 19.0099H18.0637L8.09179 5.04127Z"
          fill="currentColor"
        />
      </svg>
    </Box>
  )
}

export default X
