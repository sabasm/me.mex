document.getElementById('toggleOpen').addEventListener('click', function () {
  document.getElementById("mySidenav").style.width = "250px"
  document.getElementById("mySidenav").style.opacity = "1"
  document.getElementById("main").style.marginLeft = "250px"
  document.getElementById("cover").style.opacity = "1"
  document.getElementById("cover").style.zIndex = "1"
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
  document.getElementById('searchBar').removeAttribute('hidden')
  document.getElementById('searchButton').setAttribute('href', '#')
  document.getElementById('searchButton').setAttribute('onclick', "document.getElementById('searchForm').submit()")
  updatePh()
  document.getElementById('main').style.marginTop = '86px'
  document.getElementById('bodyHbs').style.height = 'calc(100vh - 130px)'
})

let i = 0
let words = ['Memela...', 'KYC viejo lesbiano...', 'Channel...']

function nextWord() {
  i++
  return words[i - 1]
}

function updatePh() {
  var intervalo = setInterval(function () {

    document.getElementById('searchBar').setAttribute('placeholder', `${nextWord()}`)
    if (i === 3) i = 0
  }, 2000)
}
const clouAPI = 'https://api.cloudinary.com/v1_1/sabasmendivil/upload'
const clouPostPre = 'gccp4t1o'

var fileUpload = document.getElementById("uploader")

fileUpload.addEventListener("change", function (event) {
  var file = event.target.files[0]
  var formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', clouPostPre)
  console.log(file)
  axios({
      url: clouAPI,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
    })
    .then(res=> {
    post = res.data.secure_url;
    console.log(post);
    
      document.getElementById("url").value = post
      setTimeout(() => document.getElementById("submitpost").click(), 3000);
      
     });
});

function loader() {

  fileUpload = document.getElementById("uploader").click();
}

<<<<<<< HEAD
// function readURL(input) {
//   if (input.files && input.files[0]) {
//     var reader = new FileReader();

//     reader.onload = function (e) {

//       //document.getElementById("submitpost").click()

//     };
//     reader.readAsDataURL(input.files[0]);
//   }
// }
=======
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
>>>>>>> 4a93b5b51811e6ba9cd005986eee2e87b0e01d22
