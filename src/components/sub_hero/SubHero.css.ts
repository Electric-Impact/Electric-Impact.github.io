import { style } from "@vanilla-extract/css"
import { eiTheme } from "../../atomic/styles/theme.css"

export const characterImage = style({
  width: 102,
  bottom: 20,
  right: 0,
  position: "absolute",

  "@media": {
    [`screen and (min-width: ${eiTheme.breakpoints.tablet})`]: {
      width: 150,
    },
    [`screen and (min-width: ${eiTheme.breakpoints.desktop})`]: {
      bottom: 0,
      left: 0,
      width: 250,
    },
    [`screen and (min-width: ${eiTheme.breakpoints.largeDesktop})`]: {
      bottom: 0,
      left: 0,
      width: 373,
    },
  },
})
