const renderFoto = function (pic) {
  pic.forEach((pic) => {
    const row = document.getElementById('row')
    const newCol = document.createElement('div')
    newCol.classList.add('col-md-4')
    const newCard = document.createElement('div')
    newCard.classList.add('card', 'mb-4', 'shadow-sm')
    newCard.innerHTML = `
    
            <img src="${pic.src.portrait}" class="bd-placeholder-img card-img-top"/>
                    <div class="card-body">
                            <h5 class="card-title">Lorem Ipsum</h5>
                            <p class="card-text">
                             This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                             longer.
                             </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small class="text-muted">9 mins</small>
                  </div>
     
    `
    newCol.appendChild(newCard)
    row.appendChild(newCol)
  })
}

fetch('https://api.pexels.com/v1/search?query=ford', {
  headers: {
    Authorization: 'CIbV2zcm1PXfrVYbg3DpecXj2HC6pK46LQfSh5A7CNSbWL3TsTSR6EkP',
  },
})
  .then((res) => {
    console.log('risultato', res)
    console.log('fetch terminata con successo!')
    if (res.ok) {
      return res.json()
    } else {
      throw new Error('404- not found')
    }
  })
  .then((foto) => {
    console.log('foto', foto)

    renderFoto(foto.photos)
  })
  .catch((err) => {
    console.log(err)
  })
