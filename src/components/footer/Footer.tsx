import React from "react"
import { Box, Container, Text } from "../../atomic"
import Icons from "../../atomic/components/icons/Icon"

const Footer: React.FC = () => {
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
        flexDirection={{mobile: "column", tablet: "row"}}
        alignItems={"center"}
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
                hello@figma.com
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
              sponsor@figma.com
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
            <Box
              display={'flex'} alignItems={'center'} justifyContent={'flex-start'} gap={'xs'}
            >              
              <Icons name="instagram" width={24} height={24} color="white" />
              <Icons name="x" width={24} height={24} color="white" />
              <Icons name="facebook" width={24} height={24} color="white" />
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"xxs"}>
            <Text
              fontFamily={"caption"}
              fontSize={"s"}
              color={"fog"}
              marginBottom={"none"}
            >
              New Fundraiser
            </Text>
            <Text
              fontFamily={"caption"}
              fontSize={"s"}
              color={"white"}
              marginBottom={"none"}
            >
              Running for Change is a 501(c)(3) non-profit organization.
              Contributions are tax-deductible to the extent permitted by law.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
