$(document).ready(() => {

    /*By CodingNepal -September 16, 2020
     https://www.codingnepalweb.com/responsive-personal-portfolio-website/ 
     */
    
     // typing text animation script
    let typed = new Typed(".typing", {
        strings: ["Telecommunications", "Software Dev", "Embedded Systems", "Machine Learning", "Robotics"],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
    });
});

$("#home-link").click(() => {
    $("#home").show()
    $("#profile").hide()
    console.log("hide profile")
})

$("#profile-link").click(() => {
    $("#home").hide()
    $("#profile").show()
    console.log("hide home")
})

