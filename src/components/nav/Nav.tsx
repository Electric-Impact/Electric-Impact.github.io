import React from "react"
import { Box, Container, Text } from "../../atomic"
// import Image from "../image/Image"
import Link from "../link/Link"
import * as css from "./Nav.css"

const Nav: React.FC = () => {
  return (
    <Box style={{ width: "100%", height: 55 }} backgroundColor={"black"}>
      <Container
        display={'flex'}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={'m'}
        style={{ height: "100%" }}
      >
        <Link href={"/"} className={css.text}>
          {/* <Image
            height={40}
            src={"/assets/images/text_logo.webp"}
            alt={"Electric Impact logotype"}
          /> */}
          <Text fontFamily={"heading"} fontSize={"m"}>
            Home
          </Text>
        </Link>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          gap={"m"}
        >
          <Link href={"/about-us"} className={css.text}>
            <Text fontFamily={"heading"} fontSize={"m"}>
              About Us
            </Text>
          </Link>

          <Link href={"/games"} className={css.text}>
            <Text fontFamily={"heading"} fontSize={"m"}>
              Games
            </Text>
          </Link>
        </Box>
      </Container>
    </Box>
  )
}

export default Nav
