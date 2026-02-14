import { style } from "@vanilla-extract/css"
import { eiTheme, themeVars } from "../../atomic/styles/theme.css"

export const text = style({
  color: themeVars.colors.black,
  textDecoration: "none",
  zIndex: 11,

  ":hover": {
    opacity: 0.7,
  },

  "@media": {
    [`screen and (min-width: ${eiTheme.breakpoints.tablet})`]: {
      color: themeVars.colors.white,
    },
  },
})

export const link = style({
  color: themeVars.colors.white,
  textDecoration: "none",

  ":hover": {
    opacity: 0.7,
  },
})

export const mobileLinkContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",

  borderBottom: `1px solid rgba(28, 45, 32, 0.4)`,
  paddingBottom: themeVars.spaces.l,

  ":first-of-type": {
    borderTop: `1px solid rgba(28, 45, 32, 0.4)`,
    paddingTop: themeVars.spaces.l,
  },
})
