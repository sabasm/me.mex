document.getElementById('toggleOpen').addEventListener('click', function () {
  document.getElementById("mySidenav").style.width = "250px"
  document.getElementById("mySidenav").style.opacity = "1"
  document.getElementById("mySidenav").style.zIndex = "3"
  document.getElementById("main").style.marginLeft = "250px"
  document.getElementById("cover").style.opacity = "1"
  document.getElementById("cover").style.zIndex = "2"
})


document.getElementById('toggleClose').addEventListener('click', function () {
  document.getElementById("mySidenav").style.width = "0"
  document.getElementById("mySidenav").style.opacity = "0"
  document.getElementById("main").style.marginLeft = "0"
  document.getElementById("cover").style.opacity = "0"
  document.getElementById("cover").style.zIndex = "-1"
})

document.getElementById('cover').addEventListener('click', function () {
  document.getElementById("mySidenav").style.width = "0"
  document.getElementById("mySidenav").style.opacity = "0"
  document.getElementById("main").style.marginLeft = "0"
  document.getElementById("cover").style.opacity = "0"
  document.getElementById("cover").style.zIndex = "-1"
})

document.getElementById('searchButton').addEventListener('click', function () {
  console.log('buttonclicked')
  document.getElementById('searchBar').removeAttribute('hidden')
  document.getElementById('searchButton').setAttribute('href', '#')
  document.getElementById('searchButton').setAttribute('onclick', "document.getElementById('searchForm').submit()")
  updatePh()
  document.getElementById('main').style.marginTop = '86px'
  document.getElementById('bodyHbs').style.height = 'calc(100vh - 130px)'
})

let j = 0
let words = ['Memela...', 'KYC viejo lesbiano...', 'Channel...']

function nextWord() {
  j++
  return words[j - 1]
}

function updatePh() {
  var intervalo = setInterval(function () {

    document.getElementById('searchBar').setAttribute('placeholder', `${nextWord()}`)
    if (j === 3) j = 0
  }, 2000)
}

var elem = document.querySelector('.infiniteScroll');
var infScroll = new InfiniteScroll( elem, {
  // options
  path: '.pagination__next',
  append: '.post',
  history: false,
});

// element argument can be a selector string
//   for an individual element
var infScroll = new InfiniteScroll( '.infiniteScroll', {
  // options
});
