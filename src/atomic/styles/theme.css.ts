import { createGlobalTheme, globalStyle } from "@vanilla-extract/css"

export type ThemeColors = {
  transparent: string
  black: string
  shadow: string
  stone: string
  electric: string
  fog: string
  white: string
}

export type ThemeFontSizes = {
  s: string
  m: string
  l: string
  xl: string
  xxl: string
}

export type ThemeSpaces = {
  none: string
  xxxs: string
  xxs: string
  xs: string
  s: string
  m: string
  l: string
  xl: string
  xxl: string
  xxxl: string
}

export type ThemeFontFamilies = {
  heading: string
  primary: string
  caption: string
}

export type ThemeRadiuses = {
  none: string
  s: string
  m: string
  l: string
  full: string
}

export type ThemeFontWeights = {
  light: string
  normal: string
  semibold: string
  bold: string
  extrabold: string
}

export type ThemeBreakpoints = {
  mobile: string
  tablet: string
  desktop: string
}

export type ButtonTypes = {
  primary: string
  cta: string
  secondary: string
}

export type Theme = {
  colors: ThemeColors
  fontSizes: ThemeFontSizes
  fontFamilies: ThemeFontFamilies
  lineHeights: ThemeFontSizes
  spaces: ThemeSpaces
  borderRadiuses: ThemeRadiuses
  fontWeights: ThemeFontWeights
  containerWidth: string
  breakpoints: ThemeBreakpoints
  buttonTypes: ButtonTypes
}

export const eiTheme: Theme = {
  colors: {
    transparent: "transparent",
    black: "#000000",
    shadow: "#202020",
    stone: "#404040",
    electric: "#00AEFF",
    fog: "#AAAAAA",
    white: "#FFFFFF",
  },
  fontFamilies: {
    heading: 'Righteous, sans-serif',
    primary: 'Roboto Flex, sans-serif',
    caption: 'Roboto Mono, monospace',
  },
  fontSizes: {
    s: "clamp(1rem, 0.9712rem + 0.1282vw, 1.125rem)",
    m: "clamp(1.333rem, 1.2945rem + 0.1709vw, 1.4996rem)",
    l: "clamp(1.7769rem, 1.7256rem + 0.2278vw, 1.999rem)",
    xl: "clamp(2.3686rem, 2.3003rem + 0.3037vw, 2.6647rem)",
    xxl: "clamp(5.6102rem, 5.4484rem + 0.7193vw, 6.3115rem)",
  },
  lineHeights: {
    s: '1.3em',
    m: '1.4em',
    l: '1.5em',
    xl: '1.6em',
    xxl: '1.9em',
  },
  spaces: {
    none: '0',
    xxxs: 'clamp(0.1875rem, 0.1716rem + 0.0654vw, 0.25rem)',
    xxs: 'clamp(0.375rem, 0.3591rem + 0.0654vw, 0.4375rem)',
    xs: 'clamp(0.5625rem, 0.5306rem + 0.1307vw, 0.6875rem)',
    s: 'clamp(0.75rem, 0.7181rem + 0.1307vw, 0.875rem)',
    m: 'clamp(1.125rem, 1.0772rem + 0.1961vw, 1.3125rem)',
    l: 'clamp(1.5rem, 1.4363rem + 0.2614vw, 1.75rem)',
    xl: 'clamp(2.25rem, 2.1544rem + 0.3922vw, 2.625rem)',
    xxl: 'clamp(3rem, 2.8725rem + 0.5229vw, 3.5rem)',
    xxxl: 'clamp(4.5rem, 4.3088rem + 0.7843vw, 5.25rem)',
  },
  borderRadiuses: {
    none: '0',
    s: '0.25rem',
    m: '0.5rem',
    l: '1rem',
    full: '50%',
  },
  fontWeights: {
    light: '300',
    normal: '400',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  containerWidth: '77.5rem',
  breakpoints: {
    mobile: '0',
    tablet: '768px',
    desktop: '1200px',
  },
  buttonTypes: {
    cta: 'cta',
    primary: 'primary',
    secondary: 'secondary',
  },
}

export const themeVars = createGlobalTheme(":root", eiTheme)

globalStyle("body", {
  scrollbarWidth: "none",
  color: eiTheme.colors.shadow,
})

globalStyle("*", {
  fontFamily: "inherit",
  boxSizing: "border-box",
  margin: 0,
  transition: "all 0.2s ease-in-out",
})

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontFamily: eiTheme.fontFamilies.heading,
})