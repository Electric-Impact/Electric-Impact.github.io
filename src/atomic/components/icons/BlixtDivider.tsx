import React, { FC } from "react"

import { IconBaseProps } from "./Base"
import Box from "../atoms/box/Box"

const BlixtDivider: FC<IconBaseProps> = ({
  width = "100%",
  height = "100%",
  ...props
}) => {
  return (
    <Box {...props}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 1920 138"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 54L655 35L629 59L1920 21V78L1254 102L1279 80L0 117V54Z"
          fill="url(#paint0_linear_102_123)"
        />
        <mask
          id="mask0_102_123"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="493"
          y="0"
          width="1361"
          height="138"
        >
          <rect
            x="493"
            width="1361"
            height="138"
            fill="url(#paint1_linear_102_123)"
          />
        </mask>
        <g mask="url(#mask0_102_123)">
          <g filter="url(#filter0_di_102_123)">
            <path
              d="M0 54L655 35L629 59L1920 21V78L1254 102L1279 80L0 117V54Z"
              fill="url(#paint2_linear_102_123)"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_di_102_123"
            x="-24"
            y="-3"
            width="1968"
            height="144"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="12" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.34902 0 0 0 0 0.823529 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_102_123"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_102_123"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="12" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_102_123"
            />
          </filter>
          <linearGradient
            id="paint0_linear_102_123"
            x1="0"
            y1="69"
            x2="1920"
            y2="69"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0439A7" />
            <stop offset="0.6875" stop-color="#57D1FF" />
            <stop offset="1" stop-color="#3D9FE2" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_102_123"
            x1="493"
            y1="69"
            x2="1854"
            y2="69"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D9D9D9" stop-opacity="0" />
            <stop offset="0.5" stop-color="#A6A6A6" />
            <stop offset="1" stop-color="#737373" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_102_123"
            x1="0"
            y1="69"
            x2="1920"
            y2="69"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0439A7" />
            <stop offset="0.6875" stop-color="#57D1FF" />
            <stop offset="1" stop-color="#3D9FE2" />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  )
}

export default BlixtDivider
