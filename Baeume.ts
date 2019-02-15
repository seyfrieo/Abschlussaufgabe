//Aufgabe: (Aufgabe 06)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (24.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.

namespace Abschlussaufgabe {

    export class Baeume {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        draw(): void {
            
    crc2.fillStyle = "#90EE90";
    crc2.fillRect(this.x, this.y, 20, 30);
    
    crc2.beginPath();
    crc2.moveTo(this.x - 30, this.y);
    crc2.lineTo(this.x + 10, this.y - 100);
    crc2.lineTo(this.x + 50, this.y);
    crc2.closePath();
    crc2.fillStyle = "#90EE90";
    crc2.fill();
        }
    }
}