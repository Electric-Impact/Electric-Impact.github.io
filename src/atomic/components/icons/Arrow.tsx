import React, { FC } from "react"

import { IconBaseProps } from "./Base"
import Box from "../atoms/box/Box"

const Facebook: FC<IconBaseProps> = ({
  width = "100%",
  height = "100%",
  ...props
}) => {
  return (
    <Box {...props}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.71967 1.85986H0.53033V0.359863H11.2803V11.1099H9.78033V2.92052L1.06066 11.6402L0 10.5795L8.71967 1.85986Z"
          fill="currentColor"
        />
      </svg>
    </Box>
  )
}

export default Facebook
