
    $(document).ready(function() {

    var _urlRoulette = "http://netflixroulette.net/api/api.php?director=";
    var _fakeJsonRestApi = "https://jsonplaceholder.typicode.com/posts";
    var _directorInput = $('input#directorName');
    var _directorName;
    var _slugUrl;
    var _response;
    
    var sendDirector = function(){
        return _directorInput.val();
    };
    
    $('input#send').on('click', function() {
        sendDirector();
         _directorName = _directorInput.val();
         var _slugUrl = _urlRoulette + encodeURI(_directorName);
        console.log("Director: " + _directorName);
       
    $('input.hideBtn').on('click', function(){
        $('input.hideBtn').hide(slow);
    })

        

        
        _directorInput.val('');

    })
$('#image-header').children().on('mouseover', function(){
    $('#gallery').animate({opacity: 0.6}, 300)
})

$('#gallery').on('mouseout', function(){
    $('#gallery').css('opacity', 1);
})

$('#btn').on('mouseover', function(){
    $('#btn').fadeIn("slow", function(){
        this.css('opacity', 0.4);
    })
    
})
    
var getMoviesByDirector = function(){

    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        data : { get_param: 'value' },
        dataType: "json",
        url: "http://localhost:49958/api/test",
        
    success: function(ret) {
       console.log("connected");
      _response = ret;
      var insert = '';
      var items = [];
      console.log("connected");
      //console.log(_response);
      $.each(_response, function(index, item){
        insert +="id " + item.Id + " "+ "Name" + item.Name + " " + item.Email;
        items.push("<div class='panel'><div class='panel-title'> Title: " + item.Name + "</div><div class='panel-body'> "+ "Body: " + item.Email + "</div><div class='panel-footer'><input type='button' value='ok' id='hideBtn'/></div></div>");
        $("div#result").html(items);
        
      })
    },
    complete: function() {
        //ten fragment wykona się po zakończeniu łączenia - nie ważne czy wystąpił błąd, czy sukces
        console.log(_slugUrl);
    },
    error: function(jqXHR, errorText, errorThrown) {
        //ten fragment wykona się w przypadku BŁĘDU
        //do zmiennej errorText zostanie przekazany błąd
        console.log(errorText);

    }
})

}();


    $.ajax({
        url: _slugUrl
    }).then(function(data) {
      // $('.greeting-id').append(data.unit);
      // $('.greeting-content').append(data.content);
    });
});


