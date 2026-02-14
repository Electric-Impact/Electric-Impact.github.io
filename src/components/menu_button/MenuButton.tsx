import { Dispatch, FC, SetStateAction } from "react"
import * as css from "./MenuButton.css"
import { Box } from "../../atomic"

type PropTypes = {
  menuOpen: boolean
  setmenuOpen: Dispatch<SetStateAction<boolean>>
  className?: string
}

const MenuButton: FC<PropTypes> = ({ menuOpen, setmenuOpen, className }) => {
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
          backgroundColor={!menuOpen ? "white" : "black"}
          className={`${css.line} ${menuOpen ? css.active["top"] : undefined}`}
        />
        <Box
          backgroundColor={!menuOpen ? "white" : "black"}
          className={`${css.line} ${menuOpen ? css.active["bottom"] : undefined}`}
        />
      </Box>
    </Box>
  )
}

export default MenuButton
