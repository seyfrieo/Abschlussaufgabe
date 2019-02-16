var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    var serverAddress = "https://seifes/rodelbahn.herokuapp.com/";
    function init(_event) {
        console.log("Init");
        var insertButton = document.getElementById("insert");
        console.log(insertButton);
        var refreshButton = document.getElementById("refresh");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
    }
    function insert(_event) {
        var inputs = document.getElementsByTagName("input");
        var query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&score=" + document.getElementById("endScore").getAttribute("value");
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function refresh(_event) {
        var query = "command=refresh";
        sendRequest(query, handleFindResponse);
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
        var returnNumber;
        if (_a.score > _b.score) {
            returnNumber = -1;
        }
        else if (_a.score < _b.score) {
            returnNumber = 1;
        }
        else {
            returnNumber = 0;
        }
        return returnNumber;
    }
    function handleFindResponse(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var output = document.getElementById("scores");
            var scores = [];
            var responseAsJson = JSON.parse(xhr.response);
            responseAsJson.sort(playerDataSort);
            for (var i = 0; i < responseAsJson.length; i++) {
                console.log(responseAsJson[i].name);
                output.innerHTML += "<p id='showScores'><strong>Name: </strong>" + responseAsJson[i].name + "<br><strong>Score: </strong>" + responseAsJson[i].score + "</p>";
            }
        }
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=DatabaseClient.js.map