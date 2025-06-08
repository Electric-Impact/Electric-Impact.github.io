import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

import { eiTheme, themeVars } from './theme.css'

export const layoutProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': `screen and (min-width: ${eiTheme.breakpoints.tablet})` },
    desktop: { '@media': `screen and (min-width: ${eiTheme.breakpoints.desktop})` },
  },
  defaultCondition: 'mobile',
  properties: {
    position: ['absolute', 'relative', 'fixed'],
    display: ['none', 'block', 'inline', 'inline-block', 'flex', 'inline-flex'],
    alignItems: ['flex-start', 'center', 'flex-end', 'stretch'],
    justifyContent: ['flex-start', 'center', 'flex-end', 'space-between'],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    flexShrink: [0, 1],
    flexGrow: [0, 1],
    flexWrap: ['wrap', 'nowrap'],

    paddingTop: themeVars.spaces,
    paddingBottom: themeVars.spaces,
    paddingLeft: themeVars.spaces,
    paddingRight: themeVars.spaces,

    marginTop: { ...themeVars.spaces, auto: 'auto' },
    marginBottom: { ...themeVars.spaces, auto: 'auto' },
    marginLeft: { ...themeVars.spaces, auto: 'auto' },
    marginRight: { ...themeVars.spaces, auto: 'auto' },

    borderTopLeftRadius: themeVars.borderRadiuses,
    borderTopRightRadius: themeVars.borderRadiuses,
    borderBottomLeftRadius: themeVars.borderRadiuses,
    borderBottomRightRadius: themeVars.borderRadiuses,

    fontFamily: themeVars.fontFamilies,
    fontSize: themeVars.fontSizes,
    lineHeight: themeVars.lineHeights,
    fontWeight: themeVars.fontWeights,

    textAlign: ['left', 'center', 'right'],
    gap: themeVars.spaces,
    gridColumnGap: themeVars.spaces,
    gridRowGap: themeVars.spaces,
  },
  shorthands: {
    borderRadius: ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],

    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
})

const colorProperties = defineProperties({
  properties: {
    color: themeVars.colors,
    background: themeVars.colors,
    backgroundColor: themeVars.colors,
    borderColor: themeVars.colors,
  },
})

export const sprinkles = createSprinkles(layoutProperties, colorProperties)

export type Sprinkles = Parameters<typeof sprinkles>[0]
