$(window).scroll(function() {	

    var navbar = document.getElementById("header");

    if($(this).scrollTop() >= 600) {
        navbar.classList.add("sticky")
    } 
    else {
        navbar.classList.remove("sticky");
    }


    //Nav highlighting
    if($(this).scrollTop() < 550) {
        $('nav a').removeClass('active');
        $('nav a').eq(0).addClass('active');
    }
    else if($(this).scrollTop() < 1150) {
        $('nav a').removeClass('active');
        $('nav a').eq(1).addClass('active');
    }
    else if($(this).scrollTop() < 1750) {
        $('nav a').removeClass('active');
        $('nav a').eq(2).addClass('active');
    }
    else if($(this).scrollTop() < 2350) {
        $('nav a').removeClass('active');
        $('nav a').eq(3).addClass('active');
    }
    else if($(this).scrollTop() < 2950) {
        $('nav a').removeClass('active');
        $('nav a').eq(4).addClass('active');
    }
    else {
        $('nav a').removeClass('active');
        $('nav a').eq(5).addClass('active');
    }
});    