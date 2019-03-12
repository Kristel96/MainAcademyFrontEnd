$( document ).ready(function() {
    $("#main-container").empty();
    let storiesArray =JSON.parse( localStorage.getItem("stories"));
    for(var i =0; i<storiesArray.length;i++){
        $("#main-container").append("<div class=\"card\" style=\"width: 18rem; margin: 10px;\">\n" +
            "  <img src='"+storiesArray[i].imgSRC+"' class=\"card-img-top\" alt=\"...\">\n" +
            "  <div class=\"card-body\">\n" +
            "    <h5 class=\"card-title\">"+storiesArray[i].title+"</h5>\n" +
            "    <p class=\"card-text\"> "+storiesArray[i].text+"</p>\n" +
            "  </div>\n" +
            "</div>")
    }
});

// $("#main-container").append("<p>"+storiesArray[i].title+"</p>" +
//     "<img src='"+storiesArray[i].imgSRC+"'>" +
//     "<p>"+storiesArray[i].text+"</p>")