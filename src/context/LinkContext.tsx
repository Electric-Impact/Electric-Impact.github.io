import { SocialLink } from "../components/socials/Socials"

export type FooterData = {
  data: {
    email: string
    sponsorships: string
    socialLinks: SocialLink[]
    legals: string
  }
}