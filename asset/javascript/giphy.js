$(document).ready(function(){

    var displayedButtons = ["supergirl", "tom & jerry", "emotions", "nemo"];


    // create, dispaly, add data name to btns
    function renderButtons(){ 

        $("#display-buttons").empty();

        for (var i = 0; i < displayedButtons.length; i++){

            var newButton = $("<button>") 
            newButton.attr("class", "btn btn-default");
            newButton.attr("id", "input")  
            newButton.attr("data-name", displayedButtons[i]); 
            newButton.text(displayedButtons[i]); 
            $("#display-buttons").append(newButton); 
        }
    }
            renderButtons();



//display iamges - still and animation 


    function displayImg(){

        $("#display-images").empty();
        var input = $(this).attr("data-name");
        var limit = 10;
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&limit=" + limit + "&api_key=WlsNIHSGrkfePf38NKHYoEhH4bxbRmxV";   

        $.ajax({
            url: queryURL, 
            method: "GET"
        }).done(function(response) {

            for(var j = 0; j < limit; j++) {    

                var displayDiv = $("<div>");
                displayDiv.addClass("holder");
            
                var image = $("<img>");
                image.attr("src", response.data[j].images.original_still.url);
                image.attr("data-still", response.data[j].images.original_still.url);
                image.attr("data-animate", response.data[j].images.original.url);
                image.attr("data-state", "still");
                image.attr("class", "gif");
                displayDiv.append(image);

               

                $("#display-images").append(displayDiv);
            }
        });
    }
              $(document).on("click", "#input", displayImg); 
    

     // add search input

    $("#submitPress").on("click", function(){

        var input = $("#user-input").val().trim();
        form.reset();
        displayedButtons.push(input);
                
        renderButtons();

        return false;
    })

  

    
   
});  //document. ready