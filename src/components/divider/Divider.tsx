import React from "react"
import Icons from "../../atomic/components/icons/Icons"

const Divider: React.FC = () => {
  return (
    <Icons
      name="blixt-divider"
      style={{
        width: "100%",
        height: "auto",
        position: "absolute",
        top: 0,
        transform: "translateY(-50%)",
      }}
    />
  )
}

export default Divider
