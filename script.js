$(document).ready(function() {
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('.social').toggleClass('social-toggle');
        $('.nav').toggleClass('toggle-nav');
    });
});

// const checkbox = document.querySelector(".container"),
// para= document.querySelector("#para");

// checkbox.addEventListener("click", ()=> {
//     if (para.style.text-decoration === "") {
//         para.style.text-decoration = "line-trough";
//     }
// });