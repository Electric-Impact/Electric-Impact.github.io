import React, { FC } from "react"

import { IconBaseProps } from "./Base"
import Box from "../atoms/box/Box"

const ArrowRight: FC<IconBaseProps> = ({
  width = "100%",
  height = "100%",
  ...props
}) => {
  return (
    <Box {...props}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.3315 6.8514L6.54072 1.06066L7.60138 -2.33724e-08L15.2028 7.6014L7.60138 15.2028L6.54072 14.1421L12.3315 8.3514L-1.81436e-05 8.3514L-1.86494e-05 6.8514H12.3315Z"
          fill="currentColor"
        />
      </svg>
    </Box>
  )
}

export default ArrowRight
