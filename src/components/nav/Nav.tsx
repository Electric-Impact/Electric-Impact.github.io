import React, { useEffect, useState } from "react"
import { Box, Text } from "../../atomic"
import Image from "../image/Image"
import Link from "../link/Link"
import * as css from "./Nav.css"
import { NavData } from "../../context/LinkContext"
import builder from "@builder.io/react"
import MenuButton from "../menu_button/MenuButton"
import Icons from "../../atomic/components/icons/Icons"
import WishlistSteam from "../../atomic/components/icons/WishlistSteam"
import Socials from "../socials/Socials"

const Nav: React.FC = () => {
  const [menuOpen, setmenuOpen] = useState(false)
  const [navData, setNavData] = useState<NavData>({
    data: { links: [], useLogo: false, logo: "", socialLinks: [] },
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

  return (
    <>
      <Box
        style={{
          width: "100%",
          height: 55,
          zIndex: 100,
          boxShadow: "0 5px 8.5px 0 rgba(0, 0, 0, 0.25)",
        }}
        backgroundColor={"granite"}
        display={{ mobile: "none", tablet: "flex" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"m"}
        paddingX={"l"}
        position={"fixed"}
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
            <Link key={index} href={link.link} className={css.text}>
              <Text fontFamily={"heading"} fontSize={"m"}>
                {link.label}
              </Text>
            </Link>
          ))}
        </Box>
      </Box>

      <Box
        display={{ mobile: "flex", tablet: "none" }}
        className={css.mobileNav}
        style={{
          boxShadow: !menuOpen ? "0 5px 8.5px 0 rgba(0, 0, 0, 0.25)" : "none",
        }}
      >
        <MenuButton menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      </Box>

      {menuOpen && (
        <Box
          position={"fixed"}
          backgroundColor={"white"}
          display={"flex"}
          flexDirection={"column"}
          paddingY={"m"}
          paddingX={"s"}
          gap={"xl"}
          style={{
            top: 55,
            left: 0,
            width: "100%",
            height: "100dvh",
            zIndex: 99,
          }}
        >
          <ul className={css.navLinksContainer}>
            <li className={css.navLinks}>
              <Link href={"/"} className={css.mobileText}>
                <Text
                  fontFamily={"caption"}
                  fontSize={"s"}
                  color="granite"
                  fontWeight={"normal"}
                  style={{ textTransform: "uppercase" }}
                  marginBottom={"none"}
                >
                  Home
                </Text>
                <Icons name="arrow" width={14} color="stone" />
              </Link>
            </li>
            {nav?.links?.map((link, index) => (
              <li key={index} className={css.navLinks}>
                <Link href={link.link} className={css.mobileText}>
                  <Text
                    fontFamily={"caption"}
                    fontSize={"s"}
                    color="granite"
                    fontWeight={"normal"}
                    style={{ textTransform: "uppercase" }}
                    marginBottom={"none"}
                  >
                    {link.label}
                  </Text>
                  <Icons name="arrow" width={14} color="stone" />
                </Link>
              </li>
            ))}
          </ul>

          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"xs"}
            style={{ width: "100%" }}
          >
            <Link
              href={"https://store.steampowered.com/curator/45644780"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WishlistSteam
                style={{ maxWidth: 150, width: "100%" }}
              />
            </Link>
            <Socials size="l" socials={nav?.socialLinks} />
          </Box>
        </Box>
      )}
    </>
  )
}

export default Nav
