document.getElementById('toggleOpen').addEventListener('click', function(){
    document.getElementById("mySidenav").style.width = "250px"
    document.getElementById("mySidenav").style.opacity = "1"
    document.getElementById("main").style.marginLeft = "250px"
    document.getElementById("cover").style.opacity = "1"
    document.getElementById("cover").style.zIndex = "1"
})


document.getElementById('toggleClose').addEventListener('click', function(){
    document.getElementById("mySidenav").style.width = "0"
    document.getElementById("mySidenav").style.opacity = "0"
    document.getElementById("main").style.marginLeft= "0"
    document.getElementById("cover").style.opacity = "0"
    document.getElementById("cover").style.zIndex = "-1"
})

document.getElementById('cover').addEventListener('click', function(){
  document.getElementById("mySidenav").style.width = "0"
  document.getElementById("mySidenav").style.opacity = "0"
  document.getElementById("main").style.marginLeft= "0"
  document.getElementById("cover").style.opacity = "0"
  document.getElementById("cover").style.zIndex = "-1"
})

document.getElementById('searchButton').addEventListener('click', function(){
  document.getElementById('searchBar').removeAttribute('hidden')
  document.getElementById('searchButton').setAttribute('href','#')
  document.getElementById('searchButton').setAttribute('onclick',"document.getElementById('searchForm').submit()")
  updatePh()
  document.getElementById('main').style.marginTop = '86px'
  document.getElementById('bodyHbs').style.height = 'calc(100vh - 130px)'
})

let i = 0
let words = ['Memela...', 'KYC viejo lesbiano...', 'Channel...']

function nextWord(){
  i++
  return words[i-1]
}

function updatePh(){
  var intervalo = setInterval(function(){

  document.getElementById('searchBar').setAttribute('placeholder', `${nextWord()}`)
    if(i === 3) i = 0
  },2000)
}

function loader(){
  document.getElementById("loader").click()
}

function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
console.log('uploaded')
document.getElementById("submitpost").click()
      };
      reader.readAsDataURL(input.files[0]);
  }
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