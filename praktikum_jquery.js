$('#nim').html('20170140022');

$(function () {
    console.log("Hello");
});

//kode j query utk menyembunyikan element
$("#show").on("click", function () {
    $("#nama").show();
});

$("#toggle").on("click", function () {
    $("#nama").toggle();
})

// Fade in jquery
$("#fadeIn").on("click", function () {
    $("#tanggal").fadeIn();
});

// Fade out jquery
$("#fadeOut").on("click", function () {
    $("#tanggal").fadeOut();
});

// cobain
$("#fadeToggle").on("click", function () {
    $("#tanggal").fadeToggle();
});

// Slide up
$("#slideUp").on("click", function () {
    $("#img").slideUp();
});

// Slide Down
$("#slideDown").on("click", function () {
    $("#img").slideDown();
});

// Slide Toggle
$("#slideToggle").on("click", function () {
    $("#img").slideToggle();
});