$(document).ready(function(){

    var displayedButtons = ["Frozen", "nemo", "shark tales", "Aladdin"];


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
    
            console.log(response);
   

            var results = response.data;

            for(var j = 0; j < limit; j++) {    

                var displayDiv = $("<div>");
                displayDiv.addClass("holder");
            
                var image = $("<img>");
                var still = results[j].images.original_still.url;
                var animate = results[j].images.original.urll;

                image.attr("src", results[j].images.original_still.url);
                image.attr("data-still", results[j].images.original_still.url);
               image.attr("data-animate", results[j].images.original.url);
                image.attr("data-state", "still");
               image.attr("class", "gif");
                displayDiv.append(image);
      

              var rating = response.data[j].rating;
               console.log(rating);

               var R = $("<p>").text("Rating:-" + rating);
               displayDiv.prepend(R)

                $("#display-images").append(displayDiv);
            }
        });
    }
              $(document).on("click", "#input", displayImg); 
    

     //    function change the image status


           function imageChangeState(){

            var state = $(this).attr("data-state");
            var animateImage = $(this).attr("data-animate");
            var stillImage = $(this).attr("data-still");

         if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
            } 
          else 
          {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }       
        }
         
         
        $(document).on("click", ".gif", imageChangeState);

     // add search input

    $("#submitPress").on("click", function(){

        var input = $("#user-input").val().trim();
        form.reset();
        displayedButtons.push(input);
                
        renderButtons();

        return false;
    })

  

    
   
});  //document. ready