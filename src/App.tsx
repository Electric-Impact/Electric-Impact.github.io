import { useEffect, useState } from "react"
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react"
import Footer from "./components/footer/Footer"
import Nav from "./components/nav/Nav"
import registerBuilderComponents from "./utils/register-builder-components"

// Put your API key here
builder.init("236f25c22ba94096b289a910d80952f1")
registerBuilderComponents()

// set whether you're using the Visual Editor,
// whether there are changes,
// and render the content if found
const App: React.FC = () => {
  const isPreviewingInBuilder = useIsPreviewing()
  const [notFound, setNotFound] = useState(false)
  const [content, setContent] = useState()

  const builderCache = { cacheSeconds: 0, staleCacheSeconds: 0 }
  
  // get the page content from Builder
  useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get("page", {
          url: window.location.pathname,
          ...builderCache,
        })
        .promise()

      setContent(content)
      setNotFound(!content)

      // if the page title is found,
      // set the document title
      if (content?.data.title) {
        document.title = content.data.title
      }
    }
    fetchContent()
  }, [window.location.pathname])

  // If no page is found, return
  // a 404 page from your code.
  // The following hypothetical
  // <FourOhFour> is placeholder.
  if (notFound && !isPreviewingInBuilder) {
    return <>404</>
  }

  // return the page when found
  return (
    <>
      <Nav />
      {/* Render the Builder page */}
      <BuilderComponent model="page" content={content} />
      <Footer />
    </>
  )
}

export default App
