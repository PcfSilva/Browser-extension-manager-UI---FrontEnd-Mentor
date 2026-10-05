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
      const contentToggle = document.createElement("div")

      divContent.classList.add("content-main")
      divButton.classList.add("content-button")
      imgContent.classList.add("img-content")
      textContent.classList.add("text-content")
      contentToggle.classList.add("content-toggle")

      const imgCard = document.createElement("img")
      imgCard.src = item.logo
      imgCard.alt = `logo ${item.name}`
      imgContent.appendChild(imgCard)

      const title = document.createElement("strong")
      const textTitle = document.createTextNode(item.name)
      title.appendChild(textTitle)

      const span = document.createElement("span")
      const textSpan = document.createTextNode(item.description)
      span.appendChild(textSpan)

      textContent.append(title, span)
      divContent.append(imgContent, textContent)

      const btnRemove = document.createElement("button")
      btnRemove.classList.add("btn-remove")
      const textBtnRemove = document.createTextNode("Remove")
      btnRemove.appendChild(textBtnRemove)

      const btnToggle = document.createElement("input")
      btnToggle.type = "checkbox"
      btnToggle.id = "btn-toggle"
      const toggle = document.createElement("span")
      toggle.classList.add("btn-toggle")
      contentToggle.append(btnToggle, toggle)

      divButton.append(btnRemove, contentToggle)

      card.append(divContent, divButton)
      extension.appendChild(card)
    })
  } catch (err) {
    console.error("Ocorreu um erro ao chamar a API externa: ", err.message)
  }
}

renderExtension()