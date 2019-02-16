//Abschlussaufgabe - Rodelhang Terminator
//Dominik Seyfried
//256734
//17.02.2019
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.

namespace Abschlussaufgabe {
    window.addEventListener("load", init);
    let serverAddress: string = "https://seyfrieo.herokuapp.com/";

    let eventlistener: void;
    let insertButton: HTMLButtonElement;

    function init(_event: Event): void {
        console.log("Init");
        insertButton = <HTMLButtonElement>document.getElementById("insert");
        refresh(_event);
        eventlistener = insertButton.addEventListener("click", insert);
    }

    function insert(_event: Event): void {
        let input: HTMLInputElement = document.getElementById("name") as HTMLInputElement;
        let query: string = "command=insert";
        query += "&name=" + input.value;
        query+="&score=" + score;
        sendRequest(query, handleInsertResponse);
        refresh(_event);

        eventlistener = insertButton.removeEventListener("click", insert);
    }

    function refresh(_event: Event): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
        console.log("refresh");

        setTimeout(refresh, 1000);
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
    function playerDataSort(_a: playerData, _b: playerData): number {
        if (_a.score > _b.score) {
            return  -1;
        }
        else if (_a.score< _b.score) {
            return 1;
        }
        else {
            return 0;
        }

    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLTableDataCellElement[] = [];
            let responseAsJson: playerData[] = JSON.parse(xhr.response);
            responseAsJson.sort(playerDataSort);
            for (let i: number = 1; i < 10; i++) {
                output[i] = <HTMLTableDataCellElement>document.getElementById(i.toString());
                output[i].innerHTML = i.toString() + ". " + responseAsJson[i].name + "  " + responseAsJson[i].score;
            }
        }
    }
}