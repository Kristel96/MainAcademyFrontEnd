$( document ).ready(function() {
    var myUser = {};
    myUser.name = "Khrystyna";
    myUser.surname = "Rym";
    myUser.username = "lalalend";
    myUser.password = "assoonaspossible";
        $("#submitter").on("click", function () {
            let user = JSON.stringify(myUser);
            localStorage.setItem("user", user);
            let userN = $("#exampleInputEmail1").val();
            let pasw = $("#exampleInputPassword1").val();
            if (userN === myUser.username && pasw === myUser.password) {
                window.location.replace("adminPanel.html");
            }
        })
});

