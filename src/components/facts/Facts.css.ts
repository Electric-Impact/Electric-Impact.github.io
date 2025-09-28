import { style } from "@vanilla-extract/css"
import { eiTheme, themeVars } from "../../atomic/styles/theme.css"

export const container = style({
  border: "none",

        paddingRight: 0,

  "@media": {
    [`screen and (min-width: ${eiTheme.breakpoints.tablet})`]: {
      borderRight: `1px solid ${themeVars.colors.fog}`,
      paddingRight: themeVars.spaces.m,
      gap: themeVars.spaces.xl,

      ":last-child": {
        border: "none",
        paddingRight: 0,
      },
    },
    [`screen and (min-width: ${eiTheme.breakpoints.desktop})`]: {

      paddingRight: themeVars.spaces.xxl,
    },
  },
})
