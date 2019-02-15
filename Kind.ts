namespace Abschlussaufgabe {

    export class Kind extends MovingObjects {

        _dx: number;
        _dy: number;
        got_hit: boolean;


        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.type = "kind";
            this._dx = 1;
            this._dy = 0.15;
            this.got_hit = false;
        }

        move(): void {
            if (this.x < 800 || this.got_hit == false) { //wenn Kind nicht abgeschossen wurde oder Schlitten noch im Bild ist
                if (this.x > 800) {
                    this.x = 0;
                    this.reset_speed();
                    this.y = Math.random() * (400 - 270) + 270;
                }

                if (this.x > 0)
                    this.accelerate();
                this.x += this._dx; //Bewegung/Steigung
                this.y += this._dy;

                this.draw();
            }
        }

        draw(): void {

            if (this.got_hit == false) {
                crc2.beginPath();
                crc2.arc(this.x, this.y, 9, 0, 2 * Math.PI);
                crc2.fillStyle = 'black';
                crc2.fill();
                crc2.fillRect(this.x - 5, this.y, 10, 25);
                crc2.fillStyle = '#d4b28c';
                crc2.fillRect(this.x - 20, this.y + 30, 40, 5);
                crc2.fillRect(this.x - 20, this.y + 23, 40, 5);
            }
            else if (this.got_hit == true) {
                crc2.fillStyle = '#d4b28c';
                crc2.fillRect(this.x - 20, this.y + 30, 40, 5);
                crc2.fillRect(this.x - 20, this.y + 23, 40, 5);
            }
        }

        reset_speed(): void {
            this._dx = 0.5;
            this._dy = 0.075;
        }

        get_speed(): number {
            return (this._dx + this._dy);
        }

        accelerate(): void {
            this._dx += 0.075;
            this._dy += 0.015;
        }


    }
}