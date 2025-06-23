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
}
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
