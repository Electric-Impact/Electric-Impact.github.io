import { style } from "@vanilla-extract/css"
import { themeVars } from "../../atomic/styles/theme.css"

export const text = style({
  color: themeVars.colors.white,
  textDecoration: "none",

  ":hover": {
    opacity: 0.7,
  },
})

export const mobileNav = style({
  position: "sticky",
  top: 0,
  backgroundColor: themeVars.colors.granite,
  width: "100%",
  height: 55,
  zIndex: 100,
  alignItems: "center",
  justifyContent: "flex-end",
  gap: themeVars.spaces.m,
  paddingLeft: themeVars.spaces.s,
  paddingRight: themeVars.spaces.s,
})

export const navLinksContainer = style({
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: themeVars.spaces.xs,
  width: "100%",
  margin: themeVars.spaces.none,
  padding: themeVars.spaces.none,
})

export const navLinks = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: themeVars.spaces.m,
  width: "100%",
  paddingBottom: themeVars.spaces.m,
  borderBottom: `1px solid ${themeVars.colors.fog}`,

  ":last-child": {
    borderBottom: "none",
  },
})

export const mobileText = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  color: themeVars.colors.white,
  textDecoration: "none",

  ":hover": {
    opacity: 0.7,
  },
})
