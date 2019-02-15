//Aufgabe: (Aufgabe 06)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (24.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.


namespace Abschlussaufgabe {


    window.addEventListener("load", getButton);
    export let crc2: CanvasRenderingContext2D; //Variable wird in andere Dateien mit selbem Namespace exportiert
    console.log("Hallo Welt");
    let startbtn: HTMLButtonElement;

    let image: ImageData;
    let sound = new Audio ("PUNCH.mp3");

    let score = 0;
    
    let objects: MovingObjects[] = [];
    let children: Kind[] = [];

//    let nSkifahrer: number = 10; Jetzt direkt in der For-Schleife
//    let nSchnee: number = 1000;
//    let nWolken: number = 3;
//    
    let nbaeume: Baeume[] = [];

    function getButton(): void {
        startbtn = document.getElementById("startbtn") as HTMLButtonElement;

        startbtn.addEventListener("click", init)
    }

    function draw_bg(): void {
        // Hintergrund
        crc2.fillStyle = "#E0F2F7";
        crc2.fillRect(0, 0, 800, 600);

        //Sonne
        crc2.beginPath();
        crc2.arc(330, 350, 300, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#F3E2A9";
        crc2.fill();


        //BergigerBerg 2
        crc2.beginPath();
        crc2.moveTo(350, 150);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#CAE1FF";
        crc2.fill();

        //Bergiger Berg 1
        crc2.beginPath();
        crc2.moveTo(100, 50);
        crc2.lineTo(600, 600);
        crc2.lineTo(-200, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#B0C4DE";
        crc2.fill();

        //Bergiger Berg 3
        crc2.beginPath();
        crc2.moveTo(650, 250);
        crc2.lineTo(1000, 600);
        crc2.lineTo(300, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#A2B5CD";
        crc2.fill();

        //Pistige Piste
        crc2.beginPath();
        crc2.moveTo(0, 300);
        crc2.lineTo(800, 400);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 800);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();

    }

    function throwSnowball(event): void {
        console.log(event.pageX);
        console.log(event.pageY);
        let s: Schneeball = new Schneeball(event.pageX, event.pageY);
        objects.push(s);
    }

    export function checkCollsision(s: Schneeball): void {
        //objects.pop(); //schneeball vom
        let index:number = objects.indexOf(s);
        delete objects[index];
        for (let i: number = 0; i < children.length; i++) {
            let c: Kind = children[i];
            if (c.x && s.x < c.x+40 && s.y > c.y && s.y < c.y + 48 && c.got_hit == false) {
                //hit
                c.got_hit = true;


                //neues Kind wird erstellt
                let x: number = Math.random() * (0 + 800) - 800;
                let y: number = Math.random() * (250 - 350) + 350;
                let k: Kind = new Kind(x, y);
                objects.push(k);
                children.push(k); //s wird in arrayObjects gepusht (s = neue Instanz der Klasse Skifahrer; eine Instanz = 1 Skifahrer)

                //visuelles Feedback
                score += Math.round(c.get_speed() * 10);
                sound.play();
            }
        }
    }


    function init(): void { //Hauptfunktion (vormals "Let it Snow")
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        startbtn.style.display = "none";

        crc2 = canvas.getContext("2d");

        draw_bg();

        canvas.addEventListener("click", throwSnowball);

        //Schleife Skifahrer
        for (let i: number = 0; i < 10; i++) {
            let x: number = Math.random() * (0 + 800) - 800;
            let y: number = Math.random() * (250 - 350) + 350;
            let k: Kind = new Kind(x, y);
            objects.push(k);
            children.push(k); //s wird in arrayObjects gepusht (s = neue Instanz der Klasse Skifahrer; eine Instanz = 1 Skifahrer)

        }

        //Schleife B�ume
        for (let i: number = 0; i < 5; i++) {//Braucht eigentlich keine eigene Datei, aber Main.ts so sauberer
            nbaeume[i] = new Baeume( 40 + Math.random() * 300, 500 + Math.random() * 50);

        }

        //Schleife Schneeflocken
       for (let i: number = 0; i < 100; i++) {
            let s: Schnee = new Schnee(Math.random() * 800, Math.random() * 600);
            objects.push(s);
        }

        //Schleife Wolken
        for (let i: number = 0; i < 3; i++) {
            let s: Wolke= new Wolke(0 + Math.random() * 800, 0 + Math.random() * 100 + 20);
            objects.push(s);
        }

        //Hintergrundbild speichern
        image = crc2.getImageData(0, 0, 800, 600);

        animate();

    }

    function animate(): void {
        crc2.clearRect(0, 0, 800, 600);  // Hintergrund refreshen
        crc2.putImageData(image, 0, 0);
        
         for (let i: number = 0; i < objects.length; i++) {
            let s: MovingObjects = objects[i];
            if (typeof s != "undefined")
            s.move();
        }

        //Move B�ume
        for (let i: number = 0; i < nbaeume.length; i++) {
            let s: Baeume = nbaeume[i]; //Baeume=Datentyp = Speichert i-te Stelle des Arrays nbaeume
            s.draw(); //Draw-Methode der i-ten Stelle des Arrays wird aufgerufen und ausgef�hrt
        }
        crc2.fillStyle = '#000000';
        crc2.font = "12px Arial";
         crc2.fillText("Low-Score: " + score, 700, 20);

        window.setTimeout(animate, 20);
    }

}