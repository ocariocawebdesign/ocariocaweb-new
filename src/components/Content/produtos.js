import React from "react"

// Consulta via Fetch no Wordpress
//async / await
/*
async function fetchPposts(url) {
  const response = await fetch(url)
  const jsonBody = await response.json()
  return jsonBody
}

//https://mcagames.com.br/wp-json/wc/store/products
const requisicao = fetchPposts(
  "https://mcagames.com.br/wp-json/wc/store/products"
)

requisicao.then(response => {
  console.log(response[1].images[0].thumbnail)

  //Pegando os dados do objeto
  const DadosProd = () => ({
    logoSrc: "http://mcagames.com.br/wp-content/uploads/2021/10/logo1.png",
    id: response[0].id,
    name: response[0].name,
    parent: response[0].parent,

    imageThumbnailSrc: response[0].images[0].thumbnail,
    linkProdAtual: response[0].permalink,
    imageThumbnailSrc1: response[1].images[0].thumbnail,
    linkProd2: response[1].permalink,
    imageThumbnailSrc2: response[2].images[0].thumbnail,
    linkProd3: response[2].permalink,
    imageThumbnailSrc3: response[3].images[0].thumbnail,
    linkProd4: response[3].permalink,
  }
  
 
   


  
)
  // <img src="${dadosProd.imageSrc}">
  // <p>Promoção do dia: ${dadosProd.name}</p>
  
  

  
})

*/
