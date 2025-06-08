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
  s: string
  m: string
  l: string
  xl: string
  xxl: string
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
    s: 'clamp(1rem, 0.9712rem + 0.1282vw, 1.125rem)',
    m: 'clamp(1.5rem, 1.4567rem + 0.1923vw, 1.6875rem)',
    l: 'clamp(2rem, 1.9423rem + 0.2564vw, 2.25rem)',
    xl: 'clamp(3rem, 2.9135rem + 0.3846vw, 3.375rem)',
    xxl: 'clamp(4rem, 3.8846rem + 0.5128vw, 4.5rem)',
    // xxxl: 'clamp(6rem, 5.8269rem + 0.7692vw, 6.75rem)',
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

// const colors = { ...eiTheme.colors } as const
// type ColorUnion = keyof typeof colors
// export type DarkColors = Extract<
//   ColorUnion,
//   `malm${"0" | "1"}` | `lav${"0" | "1"}` | `mossa${"0"}`
// >
// export type LightColors = Exclude<ColorUnion, DarkColors>

// export type DynamicColorProperties =
//   | {
//       background: DarkColors
//       color: "white"
//     }
//   | {
//       background: LightColors
//       color: "malm0"
//     }

export const themeVars = createGlobalTheme(":root", eiTheme)

globalStyle("body", {
  // fontFamily: eiTheme.fontFamilies.primary,
  // fontSize: eiTheme.fontSizes.s,
  scrollbarWidth: "none",
  color: eiTheme.colors.shadow,
})

globalStyle("*", {
  fontFamily: "inherit",
  boxSizing: "border-box",
  margin: 0,
})