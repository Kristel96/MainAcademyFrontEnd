$( document ).ready(function() {
     // GET ALL USERS
    $(".page").click(function (){
    var currentPage = this.innerHTML;
        getUsers (currentPage);
    });
    function getUsers(page){
        $.ajax({
            url: "https://reqres.in/api/users?page="+page,
            type: "GET",
            success: function(users){
                $("#main-container").empty();
                var currentUsers = users.data;
                for(var i=0; i<currentUsers.length; i++){
                    $("#main-container").append("<div class=\"card\">\n" +
                        "    <img src=\""+currentUsers[i].avatar+"\" class=\"card-img-top\">\n" +
                        "    <div class=\"card-body\">\n" +
                        "        <p class=\"card-text\">"+currentUsers[i].first_name+"</p>\n" +
                        "        <p class=\"card-text\">"+currentUsers[i].last_name+"</p>\n" +
                        "    </div>\n" +
                        "    </div>")
                }

            }
        });
    }




            // .done(function( users ) {
            //     if(users === [] || users === null || users.length ===0){
            //         return;
            //     } else
            //     var mainContainer = $("#main-container");
            //     mainContainer.empty();
            //     for(var i=0; i<users.length; i++){
            //         tableBody.append("<tr><td>" + users[i].username + "</td><td>"+
            //             users[i].email+"</td><td>"+
            //             users[i].phone+"</td><td><button class='adressBtn' id='"+users[i].addressLine1+"'>Show Adress</button></td></tr>");
            //     }
            //     var allButtons = $(".adressBtn");
            // });

});

