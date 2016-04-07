openNav("home")
function openNav(navName) {
    var i;
    var x = document.getElementsByClassName('nav');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(navName).style.display = "block";
}