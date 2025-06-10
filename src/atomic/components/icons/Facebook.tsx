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
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.8198 24H2C0.89543 24 0 23.1046 0 22V2C0 0.89543 0.895431 0 2 0H22C23.1046 0 24 0.895432 24 2V22C24 23.1046 23.1046 24 22 24H16.5601V14.7061H19.6799L20.1469 11.084H16.5601V8.77143C16.5601 7.72274 16.8513 7.00812 18.3552 7.00812L20.2733 7.00722V3.76763C19.9415 3.72356 18.8029 3.62492 17.4784 3.62492C14.7129 3.62492 12.8198 5.31288 12.8198 8.41281V11.084H9.69214V14.7061H12.8198V24Z"
          fill="currentColor"
        />
      </svg>
    </Box>
  )
}

export default Facebook
