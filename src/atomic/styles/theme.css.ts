/* eslint-disable no-useless-computed-key */
import { createGlobalTheme, globalStyle } from "@vanilla-extract/css"

export type ThemeColors = {
  transparent: string
  black: string
  granite: string
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
  xxxl: string
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
  ['l-xxl']: string
  ['l-xxxl']: string
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
  xl: string
  full: string
}

export type ThemeFontWeights = {
  light: string
  normal: string
  medium: string
  semibold: string
  bold: string
}

export type ThemeBreakpoints = {
  mobile: string
  tablet: string
  desktop: string
  largeDesktop: string
}

export type ButtonTypes = {
  primary: string
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
    granite: "#202020",
    shadow: "#2B2B2B",
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
    s: "clamp(1rem, 1rem + 0vw, 1rem)",
    m: "clamp(1.2rem, 1.0757rem + 0.5304vw, 1.5rem)",
    l: "clamp(1.44rem, 1.1044rem + 1.432vw, 2.25rem)",
    xl: "clamp(1.728rem, 1.0455rem + 2.9118vw, 3.375rem)",
    xxl: "clamp(2.0736rem, 0.8351rem + 5.2842vw, 5.0625rem)",
    xxxl: "clamp(2.4883rem, 0.3728rem + 9.0262vw, 7.5938rem)",
  },
  lineHeights: {
    s: '1.3em',
    m: '1.4em',
    l: '1.5em',
    xl: '1.6em',
    xxl: '1.9em',
    xxxl: '2em',
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
    ['l-xxl']: 'clamp(2rem, 1.3627rem + 2.6144vw, 4.5rem)',
    ['l-xxxl']: 'clamp(2rem, 0.7892rem + 4.9673vw, 6.75rem)',
  },
  borderRadiuses: {
    none: '0',
    s: '0.25rem',
    m: '0.5rem',
    l: '1rem',
    xl: '2rem',
    full: '50%',
  },
  fontWeights: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '800',
  },
  containerWidth: '77.5rem',
  breakpoints: {
    mobile: '0',
    tablet: '768px',
    desktop: '1025px',
    largeDesktop: '1440px',
  },
  buttonTypes: {
    primary: 'primary',
    secondary: 'secondary',
  },
}

export const themeVars = createGlobalTheme(":root", eiTheme)

globalStyle("body", {
  scrollbarWidth: "none",
  color: eiTheme.colors.white,
  backgroundColor: eiTheme.colors.granite,
})

globalStyle("*", {
  scrollbarWidth: "none",
  fontFamily: "inherit",
  boxSizing: "border-box",
  margin: 0,
  transition: "all 0.2s ease-in-out",
})

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontFamily: eiTheme.fontFamilies.heading,
})

globalStyle("::-webkit-scrollbar", {
  display: "none",
  width: 0,
  height: 0,
})

globalStyle("li", {
  marginBottom: themeVars.spaces.xs,
})