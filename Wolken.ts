//Aufgabe: (Aufgabe 06)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (24.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.

namespace Abschlussaufgabe {

    export class Wolke extends MovingObjects {

        constructor(_x: number, _y: number) {
            super(_x, _y);
        }

        move(): void {

            if (this.x > 850) {
                this.x = 0;
            }

            this.x += Math.random();

            this.draw();
        }

    draw(): void {
    crc2.beginPath();
    crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFB6C1";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(this.x+40, this.y, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFB6C1";
    crc2.fill();
        }

    }
}