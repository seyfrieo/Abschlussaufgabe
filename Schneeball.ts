namespace Abschlussaufgabe {

    export class Schneeball extends MovingObjects {

        size: number;
        timer: number;
        hit: boolean;


        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.size = 100;
            this.timer = 50;
            this.type = "schneeball";
            this.hit = false;
        }

        move(): void {
            if (this.timer > 0) {

                this.timer -= 1;

                if (this.timer < 25)
                    this.y += 6;
                if (this.timer > 25)
                    this.y -= 6;


                this.size -= 1.5;
                this.draw();
            }
            if (this.timer == 0) {
                this.hit = true;
            }

            if (this.hit == true)
                checkCollsision(this);
        }


        draw(): void {

            crc2.beginPath();
            crc2.fillStyle = '#000000';
            crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            crc2.fill();
        }

    }
}
