import React from "react"
import Header from "../components/Header"
import Content from "../components/Content"
import Footer from "../components/Footer"
import "./css/style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Helmet } from "react-helmet"

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />

          <meta name="title" content="Você ainda não tem um site?" />
          <meta
            name="description"
            content="Dê vida a seu negócio e exista na internet! Qual maior site de buscas? Não precisamos nem pensar. "
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ocariocaweb.gatsbyjs.io/" />
          <meta property="og:title" content="Você ainda não tem um site?" />
          <meta
            property="og:description"
            content="Dê vida a seu negócio e exista na internet! Qual maior site de buscas? Não precisamos nem pensar."
          />
          <meta property="og:image" content="" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://ocariocaweb.gatsbyjs.io"
          />
          <meta
            property="twitter:title"
            content="Você ainda não tem um site?"
          />
          <meta
            property="twitter:description"
            content="Dê vida a seu negócio e exista na internet! Qual maior site de buscas? "
          />

          <title>O Carioca Web Desing</title>
          <link rel="canonical" href="https://ocariocaweb.gatsbyjs.io/" />
        </Helmet>
      </div>
    )
  }
}

const Home = () => (
  <>
    <Header />

    <Content />

    <Footer />
  </>
)

export default Home
