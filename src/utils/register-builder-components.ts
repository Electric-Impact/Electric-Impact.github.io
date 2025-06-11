import { Builder } from "@builder.io/react"
import Hero from "../components/hero/Hero"
import { eiTheme, themeVars } from "../atomic/styles/theme.css"
import Box from "../atomic/components/atoms/box/Box"

const ALLOWED_IMAGE_FILE_TYPES = ['jpeg', 'png', 'jpg', 'gif', 'webp']
const MARGIN_PADDING_INPUTS = [
  { name: 'margin', type: 'string', enum: [...Object.keys(themeVars.spaces), 'auto'], advanced: true },
  { name: 'marginBottom', type: 'string', enum: [...Object.keys(themeVars.spaces), 'auto'], advanced: true },
  { name: 'marginTop', type: 'string', enum: [...Object.keys(themeVars.spaces), 'auto'], advanced: true },
  { name: 'marginLeft', type: 'string', enum: [...Object.keys(themeVars.spaces), 'auto'], advanced: true },
  { name: 'marginRight', type: 'string', enum: [...Object.keys(themeVars.spaces), 'auto'], advanced: true },
  { name: 'padding', type: 'string', enum: [...Object.keys(themeVars.spaces)], advanced: true },
  { name: 'paddingLeft', type: 'string', enum: [...Object.keys(themeVars.spaces)], advanced: true },
  { name: 'paddingRight', type: 'string', enum: [...Object.keys(themeVars.spaces)], advanced: true },
  { name: 'paddingTop', type: 'string', enum: [...Object.keys(themeVars.spaces)], advanced: true },
  { name: 'paddingBottom', type: 'string', enum: [...Object.keys(themeVars.spaces)], advanced: true },
]
const COLORS = eiTheme.colors

export default function registerBuilderComponents(): void {
  Builder.registerComponent(Hero, {
    name: "Hero",
    inputs: [
      { name: "title", type: "text" },
      { name: "backgroundImage", type: "file", allowedFileTypes: ALLOWED_IMAGE_FILE_TYPES, },
      { name: "image", type: "file", allowedFileTypes: ALLOWED_IMAGE_FILE_TYPES, },
    ],
  })

  Builder.registerComponent(Box, {
    name: "Box",
    inputs: [
      ...MARGIN_PADDING_INPUTS,
      { name: 'backgroundColor', type: 'string', enum: [...Object.keys(COLORS)] },
      { name: 'flexDirection', type: 'string', enum: ['row', 'column', 'row-reverse', 'column-reverse'], defaultValue: 'row' },
      { name: 'gap', type: 'string', enum: [...Object.keys(themeVars.spaces)], defaultValue: 'm' },
      { name: 'maxWidth', type: 'number' },
    ],
  })
}
