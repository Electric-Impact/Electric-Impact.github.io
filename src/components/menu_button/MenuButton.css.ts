import { style, styleVariants } from "@vanilla-extract/css"
import { themeVars } from "../../atomic/styles/theme.css"

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  width: 24,
  height: 24,
  zIndex: 100,
})

export const menuButton = style({
  width: "100%",
  height: "100%",
  position: "relative",
  cursor: "pointer",
  transition: "all 0.25s ease",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 6,
})

export const line = style({
  width: "100%",
  height: 2,
  transition: "all 0.25s ease",
  cursor: "pointer",
  borderRadius: themeVars.borderRadiuses.xl,
})

export const active = styleVariants({
  top: { transform: "translateY(4px) rotate(45deg)" },
  bottom: { transform: "translateY(-4px) rotate(-45deg)" },
})
