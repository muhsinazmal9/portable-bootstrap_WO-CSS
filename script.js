var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//==== Back-to-top button
// $(window).on('scroll', function(event) {
//     if($(this).scrollTop() > 600){
//         $('.back-to-top').fadeIn(200)
//     } else{
//         $('.back-to-top').fadeOut(200)
//     }
// });
// //==== Animate the scroll to top
// $('.back-to-top').on('click', function(event) {
//     event.preventDefault();

//     $('html, body').animate({
//         scrollTop: 0,
//     }, 1000);
// });