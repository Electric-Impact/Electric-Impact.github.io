import React, { useEffect, useState } from "react"
import { Box, Text } from "../../atomic"
import Image from "../image/Image"
import Link from "../link/Link"
import * as css from "./Nav.css"
import { NavData } from "../../context/LinkContext"
import builder from "@builder.io/react"

const Nav: React.FC = () => {
  const [navData, setNavData] = useState<NavData>({
    data: { links: [], useLogo: false, logo: "" },
  })

  // get the navigation data from Builder
  useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get("navigation-data")
        .promise();
      setNavData(content as NavData);
    }
    fetchContent()
  }, [])

  const nav = navData?.data

  return (
    <Box
      style={{ width: "100%", height: 55 }}
      backgroundColor={"black"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={"m"}
      paddingX={"l"}
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
  )
}

export default Nav
