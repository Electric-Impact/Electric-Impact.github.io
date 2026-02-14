import { style } from "@vanilla-extract/css"
import { eiTheme } from "../../atomic/styles/theme.css"

export const zoomContainer = style({
  overflow: 'hidden',
  position: 'relative',
  height: 600,

  "@media": {
    [`screen and (min-width: ${eiTheme.breakpoints.tablet})`]: {
      height: 550,
    },

    [`screen and (min-width: ${eiTheme.breakpoints.desktop})`]: {
      height: 800,
    },
  },
})

export const gameContainer = style({
  minHeight: 600,
  cursor: "pointer",

  "@media": {
    [`screen and (min-width: ${eiTheme.breakpoints.tablet})`]: {
      minHeight: 550,
    },

    [`screen and (min-width: ${eiTheme.breakpoints.desktop})`]: {
      minHeight: 800,
      filter: "grayscale(1)",
      transition: "filter transform 0.4s ease-in-out",
      ":hover": {
        filter: "grayscale(0)",
        transform: "scale(1.20)",
      },
    },
  },
})

export const divider = style({
  top: 0,
  transform: "translateY(-50%)",
})
