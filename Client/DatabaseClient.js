//Abschlussaufgabe - Rodelhang Terminator
//Dominik Seyfried
//256734
//17.02.2019
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    var serverAddress = "https://seyfrieo.herokuapp.com/";
    var eventlistener;
    var insertButton;
    function init(_event) {
        console.log("Init");
        insertButton = document.getElementById("insert");
        refresh(_event);
        eventlistener = insertButton.addEventListener("click", insert);
    }
    function insert(_event) {
        var input = document.getElementById("name");
        var query = "command=insert";
        query += "&name=" + input.value;
        query += "&score=" + Abschlussaufgabe.score;
        sendRequest(query, handleInsertResponse);
        refresh(_event);
        eventlistener = insertButton.removeEventListener("click", insert);
    }
    function refresh(_event) {
        var query = "command=refresh";
        sendRequest(query, handleFindResponse);
        console.log("refresh");
        setTimeout(refresh, 1000);
    }
    function sendRequest(_query, _callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function playerDataSort(_a, _b) {
        if (_a.score > _b.score) {
            return -1;
        }
        else if (_a.score < _b.score) {
            return 1;
        }
        else {
            return 0;
        }
    }
    function handleFindResponse(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var output = [];
            var responseAsJson = JSON.parse(xhr.response);
            responseAsJson.sort(playerDataSort);
            for (var i = 1; i < 10; i++) {
                output[i] = document.getElementById(i.toString());
                output[i].innerHTML = i.toString() + ". " + responseAsJson[i].name + "  " + responseAsJson[i].score;
            }
        }
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=DatabaseClient.js.map