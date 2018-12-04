document.getElementById('toggleOpen').addEventListener('click', function(){
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.opacity = "1";
    document.getElementById("main").style.marginLeft = "250px";

})


document.getElementById('toggleClose').addEventListener('click', function(){
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.opacity = "0";
    document.getElementById("main").style.marginLeft= "0";
})
