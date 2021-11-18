import React from "react"
import Logo from "../Header/img/logo-grey.png"
import LogoMobile from "../Header/img/logo-mobile.png"
import CoffeCup from "../Content/img/coffe.png"

import "./style.css"

const Header = () => (
  <>
    <header id="header-section">
      <div className="container">
        <div className="row">
          <div
            id="content-header-01"
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6"
          >
            <img src={Logo} className="img-fluid" alt="" />
            <br />
            <br />

            <h1 className="h1header">Você ainda não tem um site?</h1>

            <br />

            <h2 className="h2header">
              Dê vida a seu negócio e exista na internet! Qual maior site de
              buscas? Não precisamos nem pensar "Google" é claro. Pense, seu
              site é o cartão de visitas para seu cliente. Dá mais credibilidade
              a uma empresa ou seu negócio pessoal tendo um site com suas
              descrições mais completas, além da proporção de clientes que você
              possa atingir.
            </h2>
            <div className="">
              <a
                href="https://api.whatsapp.com/send?phone=5521971025148&text=Ol%C3%A1!%20Quero%20informa%C3%A7%C3%B5es%20sobre%20Desenvolvimento%20de%20sites..."
                target="_blank"
                rel="noreferrer"
                cacak7
              >
                <button className="btn btn-primary-mod-02 text-button-size coffe-button swing ">
                  Faça uma consulta!
                </button>
              </a>
            </div>
          </div>
          <div
            id="content-header-02"
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6"
          >
            <img src={LogoMobile} className="" alt="" />
          </div>
        </div>
      </div>
    </header>
  </>
)

export default Header
