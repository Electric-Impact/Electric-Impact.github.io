import React from "react"

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
}

const Image: React.FC<ImageProps> = ({ src, alt, ...props }) => (
  <img src={src} alt={alt} {...props} />
)

export default Image
