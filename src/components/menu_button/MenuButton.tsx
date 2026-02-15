import React, { Dispatch, SetStateAction } from "react"
import { Box } from "../../atomic"
import * as css from "./MenuButton.css"

type PropTypes = {
  menuOpen: boolean
  setmenuOpen: Dispatch<SetStateAction<boolean>>
  className?: string
}

const MenuButton: React.FC<PropTypes> = ({
  menuOpen,
  setmenuOpen,
  className,
}) => {
  return (
    <Box
      className={`${css.container} ${className}`}
      onClick={() => setmenuOpen(!menuOpen)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault() // prevent scroll on space key
          e.currentTarget.click() // simulate click on Enter or Space key
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Menu button"
    >
      <Box className={css.menuButton}>
        <Box
          backgroundColor={"white"}
          className={`${css.line} ${menuOpen ? css.active["top"] : undefined}`}
        />
        <Box
          backgroundColor={"white"}
          className={`${css.line} ${menuOpen ? css.active["bottom"] : undefined}`}
        />
      </Box>
    </Box>
  )
}

export default MenuButton
