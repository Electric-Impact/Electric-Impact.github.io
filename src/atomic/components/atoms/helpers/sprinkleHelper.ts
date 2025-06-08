/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sprinkles, sprinkles } from '../../../styles/sprinkles.css'

export const parseSprinkleProps = (props: any): { sprinkleProps: Sprinkles; otherProps: any } => {
  return Object.keys(props).reduce(
    (result, key) => {
      const value = { [key]: (props as any)[key] }
      if (sprinkles.properties.has(key as keyof Sprinkles)) {
        return { ...result, sprinkleProps: { ...result.sprinkleProps, ...value } }
      } else {
        return { ...result, otherProps: { ...result.otherProps, ...value } }
      }
    },
    { sprinkleProps: {}, otherProps: {} }
  )
}
