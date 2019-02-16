namespace Abschlussaufgabe {
    window.addEventListener("load", init);
    let serverAddress: string = "https://seifes/rodelbahn.herokuapp.com/";

    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        console.log(insertButton);
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
    }

    function insert(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=insert";
        query += "&name=" + inputs[0].value;
        query+="&score="+document.getElementById("endScore").getAttribute("value");
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    function refresh(_event: Event): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function playerDataSort(_a: StudentData, _b: StudentData): number {
        let returnNumber: number;
        if (_a.score > _b.score) {
            returnNumber = -1;
        }
        else if (_a.score< _b.score) {
            returnNumber = 1;
        }
        else {
            returnNumber = 0;
        }
        return returnNumber;

    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLElement = document.getElementById("scores");
            let scores: number[] = [];
            let responseAsJson: StudentData[] = JSON.parse(xhr.response);
            responseAsJson.sort(playerDataSort);
            for (let i: number = 0; i < responseAsJson.length; i++) {
                console.log(responseAsJson[i].name);
                output.innerHTML += "<p id='showScores'><strong>Name: </strong>" + responseAsJson[i].name + "<br><strong>Score: </strong>" + responseAsJson[i].score + "</p>";
            }
        }
    }
}