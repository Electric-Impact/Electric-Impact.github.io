import React, { useEffect, useState } from "react"
import { Box, Text } from "../../atomic"
import Image from "../image/Image"
import Link from "../link/Link"
import * as css from "./Nav.css"
import { NavData } from "../../context/LinkContext"
import builder from "@builder.io/react"
import MenuButton from "../menu_button/MenuButton"
import { themeVars } from "../../atomic/styles/theme.css"
import Icons from "../../atomic/components/icons/Icons"
import { useMediaQuery } from "react-responsive"

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [navData, setNavData] = useState<NavData>({
    data: { links: [], useLogo: false, logo: "" },
  })

  // get the navigation data from Builder
  useEffect(() => {
    async function fetchContent() {
      const content = await builder.get("navigation-data").promise()
      setNavData(content as NavData)
    }
    fetchContent()
  }, [])

  const nav = navData?.data

  const isDesktop = useMediaQuery({
    maxWidth: themeVars.breakpoints.tablet,
  })

  return (
    <>
      <Box
        style={{ width: "100%", height: 55 }}
        backgroundColor={"black"}
        display={{ mobile: "none", tablet: "flex" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"m"}
        paddingX={{ mobile: "s", tablet: "l" }}
      >
        <Link href={"/"} className={css.text}>
          {nav?.useLogo && (
            <Image
              height={40}
              src={nav?.logo}
              alt={"Electric Impact logotype"}
            />
          )}
          {!nav?.useLogo && (
            <Text fontFamily={"heading"} fontSize={"m"}>
              Home
            </Text>
          )}
        </Link>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          gap={"m"}
        >
          {nav?.links?.map((link, index) => (
            <Link key={index} href={`?page=${link.link}`} className={css.text}>
              <Text fontFamily={"heading"} fontSize={"m"}>
                {link.label}
              </Text>
            </Link>
          ))}
        </Box>
      </Box>

      <Box
        style={{ width: "100%", height: 55 }}
        backgroundColor={"black"}
        display={{ mobile: "flex", tablet: "none" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"m"}
        paddingX={{ mobile: "s", tablet: "l" }}
      >
        <Box
          position={"absolute"}
          display={{ mobile: "flex", tablet: "none" }}
          flexDirection={"column"}
          alignItems={"flex-end"}
          justifyContent={"center"}
          gap={"m"}
          style={{ right: themeVars.spaces.s }}
        >
          <MenuButton
            menuOpen={menuOpen}
            setmenuOpen={() => setMenuOpen(!menuOpen)}
          />
        </Box>
      </Box>

      {menuOpen && (
        <Box
          position={"fixed"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          gap={"xxl"}
          paddingX={"s"}
          paddingTop={"xxxl"}
          backgroundColor="white"
          style={{ height: "100dvh", top: 0, width: "100%", zIndex: 10 }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            justifyContent={"center"}
            gap={"l"}
            style={{ width: "100%" }}
          >
            <Link
              href={"/"}
              className={`${css.mobileLinkContainer} ${css.link}`}
            >
              <Text fontSize={"s"} fontWeight={"medium"} color={"black"}>
                Home
              </Text>

              <Icons name="right-arrow" width={16} height={16} color="black" />
            </Link>
            {nav?.links?.map((link, i) => (
              <Link
                key={i}
                href={link.link}
                className={`${css.mobileLinkContainer} ${css.link}`}
              >
                <Text fontSize={"s"} fontWeight={"medium"} color={"black"}>
                  {link.label}
                </Text>

                <Icons
                  name="right-arrow"
                  width={16}
                  height={16}
                  color="black"
                />
              </Link>
            ))}
          </Box>
        </Box>
      )}
    </>
  )
}

export default Nav
