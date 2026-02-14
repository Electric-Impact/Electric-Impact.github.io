import { style } from "@vanilla-extract/css"
import { eiTheme, themeVars } from "../../atomic/styles/theme.css"

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: themeVars.spaces.l,
  
  "@media": {
    [`screen and (min-width: ${eiTheme.breakpoints.desktop})`]: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: themeVars.spaces.xl,
    },
  },
})

export const factsContainer = style({
  border: "none",
  paddingRight: 0,

  "@media": {
    [`screen and (min-width: ${eiTheme.breakpoints.desktop})`]: {
      borderRight: `1px solid ${themeVars.colors.fog}`,
      paddingRight: themeVars.spaces.l,
      gap: themeVars.spaces.xl,

      ":last-child": {
        border: "none",
        paddingRight: 0,
      },
    },
  },
})
