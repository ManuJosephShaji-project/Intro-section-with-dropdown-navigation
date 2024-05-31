
//Toggle the dropdown menu

$(document).ready(function () {

  //Navbar features dropdown

  $(".headline-feature").click(function () {
    $(".nav-dropdown").slideToggle();
  });

  //Navbar campany dropdown

  $(".headline-company").click(function () {
    $(".nav-dropdown-2").slideToggle();

  });

  //Features arrow animation

  $(".headline-feature").click(function () {
    $("#arrow-down-1").toggleClass('rotate');
  });

  //Company arrow animation

  $(".headline-company").click(function () {
    $("#arrow-down-2").toggleClass('rotate');
  });

});

//Menu-icon-toggle

function openNav() {
  document.getElementById("nav").style.width = "18rem";
  document.getElementById("nav").style.boxShadow = 
    "-189px 16px 91px 255px rgba(0, 0, 0, 0.3), 0px 15px 12px 0px rgba(0, 0, 0, 0.22)";

}

function closeNav() {
  document.getElementById("nav").style.width = "0rem";
  document.getElementById("nav").style.boxShadow = "none"

}