import { style } from "@vanilla-extract/css";
import { themeVars } from "../../atomic/styles/theme.css";

export const text = style({
    color: themeVars.colors.white,
    textDecoration: "none",
})