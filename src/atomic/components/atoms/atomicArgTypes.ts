import { eiTheme } from '../../styles/theme.css'

export const atomicPaddingArgTypes = {
  padding: {
    name: 'Padding',
    options: Object.keys(eiTheme.spaces),
    control: { type: 'select' },
  },
  paddingY: {
    name: 'Padding vertical',
    options: Object.keys(eiTheme.spaces),
    control: { type: 'select' },
  },
  paddingX: {
    name: 'Padding Horizontal',
    options: Object.keys(eiTheme.spaces),
    control: { type: 'select' },
  },
}

export const atomicColorArgTypes = {
  color: {
    name: 'Color',
    options: Object.keys(eiTheme.colors),
    control: { type: 'select' },
  },
  background: {
    name: 'Background',
    options: Object.keys(eiTheme.colors),
    control: { type: 'select' },
  },
}

export const atomicMarginArgTypes = {
  margin: {
    name: 'Margin',
    options: Object.keys(eiTheme.spaces),
    control: { type: 'select' },
  },
}

export const atomicFontTypes = {
  fontFamily: {
    name: 'Font family',
    options: Object.keys(eiTheme.fontFamilies),
    control: { type: 'select' },
  },
  fontWeight: {
    name: 'Font weight',
    options: Object.keys(eiTheme.fontWeights),
    control: { type: 'select' },
  },
  fontSize: {
    name: 'Font size',
    options: Object.keys(eiTheme.fontSizes),
    control: { type: 'select' },
  },
  textAlign: {
    name: 'Text align',
    options: ['left', 'right', 'center'],
    control: { type: 'select' },
  },
}

export const atomicBorderArgTypes = {
  borderRadius: {
    name: 'Border radius',
    options: Object.keys(eiTheme.borderRadiuses),
    control: { type: 'select' },
  },
  borderColor: {
    name: 'Border color',
    options: Object.keys(eiTheme.colors),
    control: { type: 'select' },
  },
}

export const atomicArgTypes = {
  ...atomicPaddingArgTypes,
  ...atomicMarginArgTypes,
  ...atomicColorArgTypes,
  ...atomicFontTypes,
  ...atomicBorderArgTypes,
}
