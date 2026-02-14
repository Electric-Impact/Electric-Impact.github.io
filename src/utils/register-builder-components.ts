import { Builder, withChildren } from "@builder.io/react"
import Hero from "../components/hero/Hero"
import { eiTheme, themeVars } from "../atomic/styles/theme.css"
import { Box, Container, Heading } from "../atomic"
import Button from "../components/button/Button"
import Games from "../components/games/Games"
import Facts from "../components/facts/Facts"
import SubHero from "../components/sub_hero/SubHero"
import TextComponent from "../components/text_component/TextComponent"
import ContentDivider from "../components/content_divider/ContentDivider"
import Character from "../components/character/Character"
import DashNews from "../components/dash_news/DashNews"

const ALLOWED_IMAGE_FILE_TYPES = ["jpeg", "png", "jpg", "gif", "webp"]
const MARGIN_PADDING_INPUTS = [
  {
    name: "margin",
    type: "string",
    enum: [...Object.keys(themeVars.spaces), "auto"],
    advanced: true,
  },
  {
    name: "marginBottom",
    type: "string",
    enum: [...Object.keys(themeVars.spaces), "auto"],
    advanced: true,
  },
  {
    name: "marginTop",
    type: "string",
    enum: [...Object.keys(themeVars.spaces), "auto"],
    advanced: true,
  },
  {
    name: "marginLeft",
    type: "string",
    enum: [...Object.keys(themeVars.spaces), "auto"],
    advanced: true,
  },
  {
    name: "marginRight",
    type: "string",
    enum: [...Object.keys(themeVars.spaces), "auto"],
    advanced: true,
  },
  {
    name: "padding",
    type: "string",
    enum: [...Object.keys(themeVars.spaces)],
    advanced: true,
  },
  {
    name: "paddingLeft",
    type: "string",
    enum: [...Object.keys(themeVars.spaces)],
    advanced: true,
  },
  {
    name: "paddingRight",
    type: "string",
    enum: [...Object.keys(themeVars.spaces)],
    advanced: true,
  },
  {
    name: "paddingTop",
    type: "string",
    enum: [...Object.keys(themeVars.spaces)],
    advanced: true,
  },
  {
    name: "paddingBottom",
    type: "string",
    enum: [...Object.keys(themeVars.spaces)],
    advanced: true,
  },
]

export default function registerBuilderComponents(): void {
  Builder.registerComponent(Hero, {
    name: "Hero",
    inputs: [
      {
        name: "type",
        type: "string",
        enum: ["main", "secondary"],
        defaultValue: "main",
      },
      { name: "title", type: "text" },
      {
        name: "color",
        type: "string",
        enum: [...Object.keys(eiTheme.colors)],
        defaultValue: "white",
      },
      {
        name: "backgroundImage",
        type: "file",
        allowedFileTypes: ALLOWED_IMAGE_FILE_TYPES,
      },
      {
        name: 'blackwhite',
        friendlyName: 'Black and white image?',
        type: 'boolean',
        defaultValue: true,
      },
      {
        name: "image",
        type: "file",
        allowedFileTypes: ALLOWED_IMAGE_FILE_TYPES,
      },
    ],
  })

  Builder.registerComponent(withChildren(Box), {
    name: "BoxComponent",
    friendlyName: "Box",
    inputs: [
      ...MARGIN_PADDING_INPUTS,
      {
        name: "backgroundColor",
        type: "string",
        enum: [...Object.keys(eiTheme.colors)],
        defaultValue: "transparent",
      },
      { name: "display", type: "string", enum: ["block", "flex"] },
      { name: "flexDirection", type: "string", enum: ["row", "column"] },
      {
        name: "alignItems",
        type: "string",
        enum: ["flex-start", "center", "flex-end"],
      },
      {
        name: "justifyContent",
        type: "string",
        enum: ["flex-start", "center", "flex-end", "space-between"],
      },
      { name: "gap", type: "string", enum: [...Object.keys(themeVars.spaces)] },
      {
        name: "position",
        type: "string",
        enum: ["relative", "absolute"],
        defaultValue: "relative",
      },
    ],
  })

  Builder.registerComponent(withChildren(Container), {
    name: "Container",
    inputs: [
      ...MARGIN_PADDING_INPUTS,
      {
        name: "backgroundColor",
        type: "string",
        enum: [...Object.keys(eiTheme.colors)],
        defaultValue: "transparent",
      },
      { name: "display", type: "string", enum: ["block", "flex"] },
      { name: "flexDirection", type: "string", enum: ["row", "column"] },
      {
        name: "alignItems",
        type: "string",
        enum: ["flex-start", "center", "flex-end"],
      },
      {
        name: "justifyContent",
        type: "string",
        enum: ["flex-start", "center", "flex-end", "space-between"],
      },
      { name: "gap", type: "string", enum: [...Object.keys(themeVars.spaces)] },
      {
        name: "maxWidth",
        type: "number",
        helperText:
          "Set a max width for the container, leave empty for default width",
      },
      {
        name: "position",
        type: "string",
        enum: ["relative", "absolute"],
        defaultValue: "relative",
      },
    ],
  })

  Builder.registerComponent(Heading, {
    name: "Heading",
    inputs: [
      ...MARGIN_PADDING_INPUTS,
      {
        name: "as",
        type: "string",
        enum: ["h1", "h2", "h3", "h4"],
        defaultValue: "h1",
        required: true,
      },
      { name: "children", type: "text", friendlyName: "Text" },
      {
        name: "textAlign",
        type: "string",
        enum: ["left", "center", "right"],
        defaultValue: "center",
      },
      {
        name: "color",
        type: "string",
        enum: [...Object.keys(eiTheme.colors)],
        defaultValue: "black",
      },
    ],
  })

  Builder.registerComponent(TextComponent, {
    name: "TextComponent",
    friendlyName: "Text",
    inputs: [
      ...MARGIN_PADDING_INPUTS,
      { name: "children", type: "richText", friendlyName: "Text" },
      {
        name: "fontFamily",
        type: "string",
        enum: [...Object.keys(eiTheme.fontFamilies)],
        defaultValue: "primary",
      },
      {
        name: "fontSize",
        type: "string",
        enum: [...Object.keys(eiTheme.fontSizes)],
        defaultValue: "s",
      },
      {
        name: "textAlign",
        type: "string",
        enum: ["left", "center", "right"],
        defaultValue: "left",
      },
      {
        name: "color",
        type: "string",
        enum: [...Object.keys(eiTheme.colors)],
        defaultValue: "black",
      },
      {
        name: "fontWeight",
        type: "string",
        enum: ["light", "normal", "medium", "semibold", "bold"],
        defaultValue: "normal",
        advanced: true,
      },
      {
        name: "lineHeight",
        type: "string",
        enum: ["s", "m", "l", "xl", "xxl", "xxxl"],
        defaultValue: "m",
        advanced: true,
      },
      { name: "maxWidth", type: "number", advanced: true },
    ],
  })

  Builder.registerComponent(Button, {
    name: "Button",
    inputs: [
      {
        name: "variant",
        friendlyName: "Type",
        type: "string",
        enum: ["primary", "secondary"],
        defaultValue: "primary",
      },
      {
        name: "cta",
        type: "boolean",
        friendlyName: "Call to action?",
        helperText: "Toggle this if the button is a CTA button",
        defaultValue: false,
      },
      {
        name: "size",
        type: "string",
        enum: ["s", "m", "l"],
        defaultValue: "l",
      },

      {
        name: "internalLink",
        type: "boolean",
        helperText: "Toggle for external link",
        defaultValue: true,
      },
      {
        name: "link",
        type: "text",
        regex: {
          pattern: "^[a-z-]+$",
          message:
            "Please enter a valid URL containing only lowercase letters and hyphens",
        },
        showIf: `options.get('internalLink') === true`,
      },
      {
        name: "externalLink",
        type: "text",
        showIf: `options.get('internalLink') === false`,
      },
      { name: "children", type: "text", friendlyName: "Text" },
    ],
  })

  Builder.registerComponent(Games, {
    name: "Games",
    inputs: [
      ...MARGIN_PADDING_INPUTS,
      {
        name: "game",
        type: "list",
        subFields: [
          {
            name: "backgroundImage",
            type: "file",
            allowedFileTypes: ALLOWED_IMAGE_FILE_TYPES,
          },
          {
            name: "logo",
            type: "file",
            allowedFileTypes: ALLOWED_IMAGE_FILE_TYPES,
          },
          { name: "buttonText", type: "text" },
          {
            name: "internalLink",
            type: "boolean",
            helperText: "Toggle for external link",
            defaultValue: true,
          },
          {
            name: "buttonLinkInternal",
            friendlyName: "Button link",
            type: "text",
            regex: {
              pattern: "^[a-z-]+$",
              message:
                "Please enter a valid URL containing only lowercase letters and hyphens",
            },
            showIf: `options.get('internalLink') === true`,
          },
          {
            name: "buttonLinkExternal",
            friendlyName: "Button link",
            type: "text",
            showIf: `options.get('internalLink') === false`,
          },
        ],
      },
    ],
  })

  Builder.registerComponent(Facts, {
    name: "Facts",
    inputs: [
      ...MARGIN_PADDING_INPUTS,
      {
        name: "fact",
        type: "list",
        subFields: [
          { name: "title", type: "text", defaultValue: "Title goes here" },
          {
            name: "description",
            type: "richText",
            defaultValue: "Text goes here",
          },
        ],
      },
      {
        name: "color",
        friendlyName: "Text Color",
        type: "string",
        enum: [...Object.keys(eiTheme.colors)],
        defaultValue: "white",
      },
    ],
  })

  Builder.registerComponent(withChildren(ContentDivider), {
    name: "ContentDivider",
    inputs: [...MARGIN_PADDING_INPUTS],
  })

  Builder.registerComponent(Character, {
    name: "Character",
    inputs: [
      ...MARGIN_PADDING_INPUTS,
      {
        name: "character",
        friendlyName: "Choose character",
        type: "string",
        enum: [
          "bosef",
          "booger",
          "bounce",
          "helga",
          "pegleg",
          "rocket",
          "shaman",
          "toilet",
        ],
      },
      {
        name: "size",
        type: "number",
        helperText: "Set the width of the character image in pixels",
        defaultValue: 373,
      },
      {
        name: "flipCharacter",
        friendlyName: "Flip character image?",
        type: "boolean",
        defaultValue: false,
      },
      {
        name: "positionY",
        friendlyName: "Characters position from top",
        type: "range",
        defaultValue: 0,
        min: 0,
        max: 100,
      },
      {
        name: "positionX",
        friendlyName: "Characters position from left",
        type: "range",
        defaultValue: 0,
        min: 0,
        max: 100,
      },
    ],
  })

  Builder.registerComponent(SubHero, {
    name: "SubHero",
    inputs: [
      ...MARGIN_PADDING_INPUTS,
      {
        name: "backgroundColor",
        type: "string",
        enum: [...Object.keys(eiTheme.colors)],
        defaultValue: "black",
      },
      {
        name: "title",
        type: "text",
        defaultValue: "Title goes here",
      },
      {
        name: "intro",
        type: "longText",
        defaultValue: "Intro goes here",
      },
      {
        name: "buttonLink",
        type: "text",
        defaultValue: "/",
      },
      {
        name: "buttonLabel",
        type: "text",
        defaultValue: "Click me",
      },
      {
        name: "internalLink",
        type: "boolean",
        helperText: "Toggle for internal link",
        defaultValue: false,
      },
      {
        name: "character",
        friendlyName: "Choose character",
        type: "string",
        enum: [
          "bosef",
          "booger",
          "bounce",
          "helga",
          "pegleg",
          "rocket",
          "shaman",
          "toilet",
        ],
      },
      {
        name: "flipCharacter",
        friendlyName: "Flip character image?",
        type: "boolean",
        defaultValue: false,
      },
    ],
  })

  Builder.registerComponent(DashNews, {
    name: "DashNews",
    inputs: [
      ...MARGIN_PADDING_INPUTS,
    ],
  })
}
