import React from "react"
import Image from "../image/Image"
import {
  CharacterType,
  getCharacterImage,
} from "../../hooks/chooseCharacterImage"
import { useMediaQuery } from "react-responsive"

type CharacterProps = {
  character: CharacterType
  flipCharacter?: boolean
  positionY?: number
  positionX?: number
  size?: number
}

const Character: React.FC<CharacterProps> = ({
  character,
  flipCharacter = false,
  positionY = 0,
  positionX = 0,
  size = 373,
}) => {
  const isWithinScreenSize = useMediaQuery({
    minWidth: 1440,
  })
  return (
    <Image
      src={getCharacterImage(character)}
      alt={`Character ${character}`}
      width={size}
      height={size}
      style={{
        position: isWithinScreenSize ? "absolute" : "relative",
        transform: flipCharacter ? "scaleX(-1)" : "none",
        left: isWithinScreenSize ? `${positionX}%` : "auto",
        top: isWithinScreenSize ? `${positionY}%` : "auto",
      }}
    />
  )
}

export default Character
