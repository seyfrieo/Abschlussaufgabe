//Aufgabe: (Aufgabe 06)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (24.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.

namespace Abschlussaufgabe {

    export class Schnee extends MovingObjects {

        constructor(_x: number, _y: number) {
            super(_x, _y);
        }

        move(): void {

            if (this.y > 600) {
                this.y = 0;
            }

            this.y += 1;

            this.draw();
        }

        draw(): void {
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.arc(this.x, this.y, 2.5, 0, 2 * Math.PI);
            crc2.fill();
        }

    }
}
