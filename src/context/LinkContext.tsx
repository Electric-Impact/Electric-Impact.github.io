import { SocialLink } from "../components/socials/Socials"

export type FooterData = {
  data: {
    email: string
    location: string
    socialLinks: SocialLink[]
    downloadLink: string
  }
}

export type NavData = {
  data: {
    links: {label: string, link: string}[]
    useLogo: boolean
    logo: string
    socialLinks: SocialLink[]
  }
}