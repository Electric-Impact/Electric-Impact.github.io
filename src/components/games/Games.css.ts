import { style } from "@vanilla-extract/css"
import { eiTheme } from "../../atomic/styles/theme.css"

export const gameContainer = style({
  minHeight: 600,

  "@media": {
    [`screen and (min-width: ${eiTheme.breakpoints.tablet})`]: {
      minHeight: 550,
    },

    [`screen and (min-width: ${eiTheme.breakpoints.desktop})`]: {
      minHeight: 800,
      filter: "grayscale(1)",
      transition: "filter 0.4s ease-in-out",
      ":hover": {
        filter: "grayscale(0)",
      },
    },
  },
})
