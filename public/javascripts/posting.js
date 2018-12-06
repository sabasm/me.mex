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
      document.getElementById("submitpost").click()
      
     });
});

function loader() {

  fileUpload = document.getElementById("uploader").click();
}