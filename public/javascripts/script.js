document.getElementById('toggleOpen').addEventListener('click', function(){
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.opacity = "1";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("nav").style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementsByClassName("items").style.backgroundColor = "rgba(0,0,0,0.4)";

})


document.getElementById('toggleClose').addEventListener('click', function(){
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.opacity = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("main").style.backgroundColor = "white";
    document.getElementById("nav").style.backgroundColor = "white";
    document.getElementsByClassName("items").style.backgroundColor = "white";
})
