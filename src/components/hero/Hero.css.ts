import { styleVariants } from "@vanilla-extract/css"
import { eiTheme } from "../../atomic/styles/theme.css"

export const container = styleVariants({
  main: {
    minHeight: 480,
    height: "100%",
    width: "100%",

    "@media": {
      [`screen and (min-width: ${eiTheme.breakpoints.tablet})`]: {
        minHeight: 710,
        marginTop: 55,
      },
      [`screen and (min-width: ${eiTheme.breakpoints.desktop})`]: {
        transition: "filter 0.4s ease-in-out",

        ":hover": {
          filter: "grayscale(0)",
        },
      },
    },
  },
  secondary: {
    width: "100%",
    height: 167,

    "@media": {
      [`screen and (min-width: ${eiTheme.breakpoints.tablet})`]: {
        height: 373,
      },
      [`screen and (min-width: ${eiTheme.breakpoints.desktop})`]: {
        height: 800,
      },
    },
  },
})

export const image = styleVariants({
  main: {
    maxHeight: 367,
    height: "100%",

    "@media": {
      [`screen and (min-width: ${eiTheme.breakpoints.tablet})`]: {
        maxHeight: 650,
      },
    },
  },
  secondary: {
    width: "100%",
    height: "100%",
  },
})
