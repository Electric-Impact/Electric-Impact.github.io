import React, { useEffect, useState } from "react"
import { Box, Container, Text } from "../../atomic"
import Socials from "../socials/Socials"
import { FooterData } from "../../context/LinkContext"
import builder from "@builder.io/react"

const Footer: React.FC = () => {
  const [footerData, setFooterData] = useState<FooterData>({
    data: { email: "", sponsorships: "", socialLinks: [], legals: "" },
  })
  // get the footer data from Builder
  useEffect(() => {
    async function fetchContent() {
      const content = (await builder.get("footer-data").promise()) as FooterData
      setFooterData(content)
    }
    fetchContent()
  }, [])

  const footer = footerData?.data

  return (
    <Box
      display={"flex"}
      alignItems={"flex-end"}
      justifyContent={"center"}
      padding={"l"}
      style={{
        width: "100%",
        backgroundImage: "url('/assets/images/footer.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: 520,
      }}
    >
      <Container
        display={"flex"}
        flexDirection={{ mobile: "column", tablet: "row" }}
        alignItems={"flex-start"}
        padding={"m"}
        backgroundColor={"black"}
        style={{ width: "100%" }}
        borderRadius={"l"}
        gap={"m"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"m"}
          style={{ width: "100%" }}
        >
          <Box display={"flex"} flexDirection={"column"} gap={"xxs"}>
            <Text
              fontFamily={"caption"}
              fontSize={"s"}
              color={"fog"}
              marginBottom={"none"}
            >
              Email
            </Text>
            <Text
              fontFamily={"caption"}
              fontSize={"s"}
              color={"white"}
              marginBottom={"none"}
            >
              {footer?.email}
            </Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"xxs"}>
            <Text
              fontFamily={"caption"}
              fontSize={"s"}
              color={"fog"}
              marginBottom={"none"}
            >
              Sponsorships
            </Text>
            <Text
              fontFamily={"caption"}
              fontSize={"s"}
              color={"white"}
              marginBottom={"none"}
            >
              {footer?.sponsorships}
            </Text>
          </Box>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"m"}
          style={{ width: "100%" }}
        >
          <Box display={"flex"} flexDirection={"column"} gap={"xxs"}>
            <Text
              fontFamily={"caption"}
              fontSize={"s"}
              color={"fog"}
              marginBottom={"none"}
            >
              Socials
            </Text>
            <Socials socials={footer?.socialLinks} />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"xxs"}>
            <Text
              fontFamily={"caption"}
              fontSize={"s"}
              color={"fog"}
              marginBottom={"none"}
            >
              Legals
            </Text>
            <Text
              fontFamily={"caption"}
              fontSize={"s"}
              color={"white"}
              marginBottom={"none"}
            >
              {footer?.legals}
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
