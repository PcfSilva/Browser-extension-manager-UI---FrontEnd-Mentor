const extension = document.querySelector(".extension")

async function renderExtension() {
  try {
    const response = await fetch("./data.json")
    if (!response.ok) {
      throw new Error(`Erro API: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json()
    console.log(data)
    data.map((item) => {
      const card = document.createElement("article")
      const divContent = document.createElement("div")
      const divButton = document.createElement("div")
      const imgContent = document.createElement("div")
      const textContent = document.createElement("div")
      const toggleButton = document.createElement("div")

      divContent.className = "content-main"
      divButton.className = "content-button"
      imgContent.className = "img-content"
      textContent.className = "text-content"
      toggleButton.className = "toggle-button"

      const imgCard = document.createElement("img")
      imgCard.src = item.logo
      imgCard.alt = `logo ${item.name}`
      imgContent.appendChild(imgCard)
      divContent.appendChild(imgContent)

      const title = document.createElement("strong")
      const textTitle = document.createTextNode(item.name)
      title.appendChild(textTitle)
      textContent.appendChild(title)

      const span = document.createElement("span")
      const textSpan = document.createTextNode(item.description)
      span.appendChild(textSpan)
      textContent.appendChild(span)
      divContent.appendChild(textContent)

      const btnRemove = document.createElement("button")
      const textBtnRemove = document.createTextNode("Remove")
      btnRemove.appendChild(textBtnRemove)
      divButton.appendChild(btnRemove)

      const btnToggle = document.createElement("span")
      span.className = "btn-toggle"
      toggleButton.appendChild(btnToggle)
      divButton.appendChild(toggleButton)

      card.append(divContent, textContent, divButton)
      extension.appendChild(card)
    })
  } catch (err) {
    console.error("Ocorreu um erro ao chamar a API externa: ", err.message)
  }
}

renderExtension()