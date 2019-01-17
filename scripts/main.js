var newTab;
function openTab(){
    newTab =  window.open("2e2w", "_blank", "width=300, height=300, scrollbars=yes ");
}
function resizeTab() {
    //newTab.resizeTo(500,500);
    newTab.resizeBy(300,300);
    newTab.focus();
}
function closeTab() {
    newTab.close();
}
function scroller(){
    newTab.scrollBy(20,1000);
    newTab.focus();
}


function hrefDetails() {
    var loc = window.location;

    var a = document.getElementById("1");
    a.innerText = "Host: " + loc.host;
    a.style.fontStyle="italic";
    var b = document.getElementById("2");
    b.innerText = "Hostname: " + loc.hostname;
    var c =  document.getElementById("3");
    c.innerText = "Origin: " + loc.origin;
    var d = document.getElementById("4");
    d.innerText = "Pathname: " + loc.pathname;
    var e = document.getElementById("5");
    e.innerText = "Port: " + loc.port;
    var f = document.getElementById("6");
    f.innerText = "Protocol: " + loc.protocol;

}


