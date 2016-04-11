openNav("home")
function openNav(navName) {
    var i;
    var x = document.getElementsByClassName('nav');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(navName).style.display = "block";
};
$(function(){
    var em = "uliakovtuniak";
    em +="@";
    em +="gmail.com";
    $('#bt').click(function() {
        $.ajax({
            url:"https://formspree.io/" + em,
            method: "POST",
            data: {
                Name: name.value,
                Email: email.value,
                Message: msg.value
            },
            dataType: 'json'
        });
    });
});