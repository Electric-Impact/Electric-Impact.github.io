import { style } from "@vanilla-extract/css"
import { eiTheme } from "../../atomic/styles/theme.css"

export const container = style({
  minHeight: 480,
  height: "100%",
  width: "100%",

  "@media": {
    [`screen and (min-width: ${eiTheme.breakpoints.tablet})`]: {
      minHeight: 710,
    },
    [`screen and (min-width: ${eiTheme.breakpoints.desktop})`]: {
      filter: "grayscale(1)",
      transition: "filter 0.4s ease-in-out",

      ":hover": {
        filter: "grayscale(0)",
      },
    },
  },
})

export const image = style({
  maxHeight: 367,
  height: "100%",

  "@media": {
    [`screen and (min-width: ${eiTheme.breakpoints.tablet})`]: {
      maxHeight: 650,
    },
  },
})
