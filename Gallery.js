$(function() {var GalleryModule = function() {

var curr = 1;

var img =  $('img#gallery');

(function(){
    img.attr('src', "http://lorempixel.com/1920/1080/");
})();

$('input#prev').on('click', function(){
    console.log("prev");
   img.attr('src', "http://lorempixel.com/400/200/sports/${curr}" );
})
$('input#next').on('click', function(){
    console.log("next");
    img.attr('src', "http://lorempixel.com/400/200/sports/${curr}");
})

}();
})  
