import { style, styleVariants } from "@vanilla-extract/css"
import { eiTheme } from "../../atomic/styles/theme.css"

export const btn = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  whiteSpace: "pre",
  fontFamily: eiTheme.fontFamilies.caption,
  textTransform: "uppercase",
  fontWeight: eiTheme.fontWeights.semibold,
  transition:
    "background cubic-bezier(0.4, 0, 0.2, 1) 200ms, border cubic-bezier(0.4, 0, 0.2, 1) 200ms",
})

export const theme = styleVariants({
  primary: {
    color: eiTheme.colors.stone,
    backgroundColor: eiTheme.colors.electric,
    border: "0",
    transition: "all 0.3s",
    ":hover": {
      backgroundColor: eiTheme.colors.shadow,
      color: eiTheme.colors.electric,
    },
  },
  secondary: {
    color: eiTheme.colors.electric,
    backgroundColor: eiTheme.colors.black,
    border: "0",
    transition: "all 0.3s",
    ":hover": {
      backgroundColor: eiTheme.colors.shadow,
      color: eiTheme.colors.electric,
    },
  },
})

export const size = styleVariants({
  s: {
    height: 36,
    fontSize: eiTheme.fontSizes.s,
    paddingLeft: eiTheme.spaces.l,
    paddingRight: eiTheme.spaces.l,
  },
  m: {
    height: 42,
    fontSize: eiTheme.fontSizes.s,
    paddingLeft: eiTheme.spaces.xl,
    paddingRight: eiTheme.spaces.xl,
  },
  l: {
    height: 48,
    fontSize: eiTheme.fontSizes.s,
    paddingLeft: eiTheme.spaces.xxl,
    paddingRight: eiTheme.spaces.xxl,
  },
})
