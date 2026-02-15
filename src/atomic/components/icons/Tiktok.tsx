import React, { FC } from "react"

import { IconBaseProps } from "./Base"
import Box from "../atoms/box/Box"

const Tiktok: FC<IconBaseProps> = ({
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
          d="M22 0C23.1046 0 24 0.895431 24 2V22C24 23.1046 23.1046 24 22 24H2C0.895431 24 3.22133e-08 23.1046 0 22V2C0 0.895431 0.895431 3.22128e-08 2 0H22ZM12.6855 14.8984C12.6855 16.197 11.648 17.2637 10.3574 17.2637C9.06684 17.2636 8.03027 16.197 8.03027 14.8984C8.03032 13.6232 9.04371 12.5797 10.2881 12.5332V9.79688C7.54568 9.84338 5.33306 12.0928 5.33301 14.8984C5.33301 17.7275 7.5922 20 10.3809 20C13.1693 19.9998 15.4277 17.7042 15.4277 14.8984V9.31055C16.4418 10.0525 17.6864 10.4924 19 10.5156V7.7793C16.9719 7.70973 15.3818 6.04057 15.3818 4H12.6855V14.8984Z"
          fill="currentColor"
        />
      </svg>
    </Box>
  )
}

export default Tiktok
