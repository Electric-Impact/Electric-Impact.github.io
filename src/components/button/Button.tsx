import React from "react"
import { eiTheme } from "../../atomic/styles/theme.css"
import * as css from "./Button.css"
import Icons from "../../atomic/components/icons/Icons"

export type ButtonType = keyof typeof eiTheme.buttonTypes
export type ButtonSize = "s" | "m" | "l"

export type ButtonCustomProps = {
  variant: ButtonType
  cta: boolean
  size: ButtonSize
  internalLink?: boolean
  link?: string
  externalLink?: string
  children: React.ReactNode
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
} & ButtonCustomProps

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  cta = true,
  size = "l",
  className,
  internalLink,
  link,
  externalLink,
  ...props
}) => {
  const [hovered, setHovered] = React.useState(false)

  if (link) {
    return (
      <a style={{ textDecoration: "none" }} href={internalLink ? `?page=${link}` : externalLink} target="_blank" rel="noopener noreferrer">
        <button
        className={`${className} ${css.btn} ${css.theme[variant]} ${css.size[size]}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...props}
      >
        {children} {cta && <Icons name="arrow" width={12} height={12} color={variant === 'primary' && !hovered ? "stone" : "electric"} />}
      </button>
      </a>
    )
  }

  return (
      <button
        className={`${className} ${css.btn} ${css.theme[variant]} ${css.size[size]}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...props}
      >
        {children} {cta && <Icons name="arrow" width={12} height={12} color={variant === 'primary' && !hovered ? "stone" : "electric"} />}
      </button>
  )
}

export default Button
