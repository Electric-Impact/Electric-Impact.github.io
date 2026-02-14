import { Characters } from "../types/Characters"

export type CharacterType =
  | "bosef"
  | "booger"
  | "bounce"
  | "helga"
  | "pegleg"
  | "rocket"
  | "shaman"
  | "toilet"

export const getCharacterImage = (character: CharacterType): string => {
  switch (character) {
    case "bosef":
      return Characters.BOSEF
    case "booger":
      return Characters.BOOGER
    case "bounce":
      return Characters.BOUNCE
    case "helga":
      return Characters.HELGA
    case "pegleg":
      return Characters.PEGLEG
    case "rocket":
      return Characters.ROCKET
    case "shaman":
      return Characters.SHAMAN
    case "toilet":
      return Characters.TOILET
    default:
      return Characters.BOSEF
  }
}
