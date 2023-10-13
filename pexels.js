const key = 'CIbV2zcm1PXfrVYbg3DpecXj2HC6pK46LQfSh5A7CNSbWL3TsTSR6EkP'
// query è il parametro che sto passando invocando la funzione dai bottoni e dal search
const getImg = function (query) {
  fetch('https://api.pexels.com/v1/search?query=' + query, {
    headers: {
      authorization: key,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('errore nella response')
      }
    })
    .then((data) => {
      console.log(data)

      const allImg = document.querySelectorAll(
        '.bd-placeholder-img.card-img-top'
      )
      const allId = document.querySelectorAll('.text-muted')
      const allTitle = document.querySelectorAll('.card-title')

      //   allImg.forEach((image, i) => {
      //     image.src = data.photos[i].src.portrait
      //   })
      // funziona anche con forEach
      for (let i = 0; i < allImg.length; i++) {
        allImg[i].src = data.photos[i].src.portrait
        allId[i].innerHTML = ''
        allId[i].innerText = data.photos[i].id
        allTitle[i].style.color = 'red'
      }
      //cambio tutti gli edit in hide dei bottoni delle card
      const editButton = document.querySelectorAll('.card .btn:nth-of-type(2)')
      editButton.forEach((button) => {
        button.innerText = 'Hide'
        button.addEventListener('click', function (e) {
          console.log('click', e.target)
          e.target.closest('.col-md-4').remove()
          //closest mi cerca risalendo il DOM il padre che contiene questo bottone
        })
      })
    })
    .catch((err) => console.log(err))
}

const loadImg1 = document.querySelector('.btn-primary')
loadImg1.addEventListener('click', () => getImg('fiat'))

const loadImg2 = document.querySelector('.btn-secondary')
loadImg2.addEventListener('click', () => getImg('ford'))

const search = document.getElementById('custom-search')
search.addEventListener('submit', function (e) {
  e.preventDefault()
  //recupero il valore della barra di ricerca
  const searchBar = document.getElementById('search-field')
  const searchValue = searchBar.value
  getImg(searchValue)
})
