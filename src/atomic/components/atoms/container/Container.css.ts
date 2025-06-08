import { globalStyle, styleVariants } from '@vanilla-extract/css'
import { themeVars } from '../../../styles/theme.css'

export const container = styleVariants({
  default: { maxWidth: themeVars.containerWidth },
  custom: {},
})

globalStyle(`${container.custom} h1`, {
  marginBottom: themeVars.spaces.none,
})

globalStyle(`${container.custom} h3`, {
  marginBottom: themeVars.spaces.none,
})

globalStyle(`${container.custom} h4`, {
  marginBottom: themeVars.spaces.none,
})
