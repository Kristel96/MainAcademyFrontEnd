var wsUri = "wss://echo.websocket.org/";
var output;
function sendMessage() {
    
}
function init()
{
    output = document.getElementById("output");
    testWebSocket();
}

function testWebSocket()
{
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) { onOpen(evt) };
    websocket.onclose = function(evt) { onClose(evt) };
    websocket.onmessage = function(evt) { onMessage(evt) };
    websocket.onerror = function(evt) { onError(evt) };
}

function onOpen(evt)
{
    console.log("Connection Opened");
    writeToScreen("CONNECTED");
    doSend("WebSocket rocks");
}

function onClose(evt)
{
    console.log("Connection Closed");
    writeToScreen("DISCONNECTED");
}

function onMessage(evt)
{
    console.log("Received message");
    writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
    websocket.close();
}

function onError(evt)
{
    console.log("error occured");
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}

function doSend(message)
{
    writeToScreen("SENT: " + message);
    websocket.send(message);
}

function writeToScreen(message)
{
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
}

window.addEventListener("load", init, false);


