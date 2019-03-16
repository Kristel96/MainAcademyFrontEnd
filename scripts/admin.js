$( document ).ready(function() {
    var allStories = [];
    var articles = localStorage.getItem("stories");
    if(articles!==null || articles!=="undefined"){
        updateItmes();
        allStories = JSON.parse(articles);
    }
var curentUser = JSON.parse(localStorage.getItem("user"));
$("#greeting").text("Hello! "+ curentUser.name + " "+ curentUser.surname );
$("#storyBtn").on("click", function(){
    let story = {};
    story.title = $("#title").val();
    story.imgSRC =$("#imgSRC").val();
    story.text =$("#myText").val();
    allStories.push(story);
    let storiesArray= JSON.stringify(allStories);
    localStorage.setItem("stories",storiesArray );
    updateItmes();
});
$("#gotoHomePage").on("click", function(){
    window.location.replace("homePage.html");
});
function updateItmes () {
    $("#cont").empty();
    let storiesArray =JSON.parse( localStorage.getItem("stories"));
    for(var i =0; i<storiesArray.length;i++){
        $("#cont").append("<p>"+storiesArray[i].title+"</p>")
    }

}
});