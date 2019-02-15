//Aufgabe: (Aufgabe 06)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (24.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", getButton);
    console.log("Hallo Welt");
    var startbtn;
    var image;
    var sound = new Audio("PUNCH.mp3");
    var score = 0;
    var objects = [];
    var children = [];
    //    let nSkifahrer: number = 10; Jetzt direkt in der For-Schleife
    //    let nSchnee: number = 1000;
    //    let nWolken: number = 3;
    //    
    var nbaeume = [];
    function getButton() {
        startbtn = document.getElementById("startbtn");
        startbtn.addEventListener("click", init);
    }
    function draw_bg() {
        // Hintergrund
        Abschlussaufgabe.crc2.fillStyle = "#E0F2F7";
        Abschlussaufgabe.crc2.fillRect(0, 0, 800, 600);
        //Sonne
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(330, 350, 300, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.fillStyle = "#F3E2A9";
        Abschlussaufgabe.crc2.fill();
        //BergigerBerg 2
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(350, 150);
        Abschlussaufgabe.crc2.lineTo(800, 600);
        Abschlussaufgabe.crc2.lineTo(0, 600);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.fillStyle = "#CAE1FF";
        Abschlussaufgabe.crc2.fill();
        //Bergiger Berg 1
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(100, 50);
        Abschlussaufgabe.crc2.lineTo(600, 600);
        Abschlussaufgabe.crc2.lineTo(-200, 600);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.fillStyle = "#B0C4DE";
        Abschlussaufgabe.crc2.fill();
        //Bergiger Berg 3
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(650, 250);
        Abschlussaufgabe.crc2.lineTo(1000, 600);
        Abschlussaufgabe.crc2.lineTo(300, 600);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.fillStyle = "#A2B5CD";
        Abschlussaufgabe.crc2.fill();
        //Pistige Piste
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(0, 300);
        Abschlussaufgabe.crc2.lineTo(800, 400);
        Abschlussaufgabe.crc2.lineTo(800, 600);
        Abschlussaufgabe.crc2.lineTo(0, 800);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.fillStyle = "#ffffff";
        Abschlussaufgabe.crc2.fill();
    }
    function throwSnowball(event) {
        console.log(event.pageX);
        console.log(event.pageY);
        var s = new Abschlussaufgabe.Schneeball(event.pageX, event.pageY);
        objects.push(s);
    }
    function checkCollsision(s) {
        //objects.pop(); //schneeball vom
        var index = objects.indexOf(s);
        delete objects[index];
        for (var i = 0; i < children.length; i++) {
            var c = children[i];
            if (c.x && s.x < c.x + 40 && s.y > c.y && s.y < c.y + 48 && c.got_hit == false) {
                //hit
                c.got_hit = true;
                //neues Kind wird erstellt
                var x = Math.random() * (0 + 800) - 800;
                var y = Math.random() * (250 - 350) + 350;
                var k = new Abschlussaufgabe.Kind(x, y);
                objects.push(k);
                children.push(k); //s wird in arrayObjects gepusht (s = neue Instanz der Klasse Skifahrer; eine Instanz = 1 Skifahrer)
                //visuelles Feedback
                score += Math.round(c.get_speed() * 10);
                sound.play();
            }
        }
    }
    Abschlussaufgabe.checkCollsision = checkCollsision;
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        startbtn.style.display = "none";
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        draw_bg();
        canvas.addEventListener("click", throwSnowball);
        //Schleife Skifahrer
        for (var i = 0; i < 10; i++) {
            var x = Math.random() * (0 + 800) - 800;
            var y = Math.random() * (250 - 350) + 350;
            var k = new Abschlussaufgabe.Kind(x, y);
            objects.push(k);
            children.push(k); //s wird in arrayObjects gepusht (s = neue Instanz der Klasse Skifahrer; eine Instanz = 1 Skifahrer)
        }
        //Schleife B�ume
        for (var i = 0; i < 5; i++) {
            nbaeume[i] = new Abschlussaufgabe.Baeume(40 + Math.random() * 300, 500 + Math.random() * 50);
        }
        //Schleife Schneeflocken
        for (var i = 0; i < 100; i++) {
            var s = new Abschlussaufgabe.Schnee(Math.random() * 800, Math.random() * 600);
            objects.push(s);
        }
        //Schleife Wolken
        for (var i = 0; i < 3; i++) {
            var s = new Abschlussaufgabe.Wolke(0 + Math.random() * 800, 0 + Math.random() * 100 + 20);
            objects.push(s);
        }
        //Hintergrundbild speichern
        image = Abschlussaufgabe.crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    function animate() {
        Abschlussaufgabe.crc2.clearRect(0, 0, 800, 600); // Hintergrund refreshen
        Abschlussaufgabe.crc2.putImageData(image, 0, 0);
        for (var i = 0; i < objects.length; i++) {
            var s = objects[i];
            if (typeof s != "undefined")
                s.move();
        }
        //Move B�ume
        for (var i = 0; i < nbaeume.length; i++) {
            var s = nbaeume[i]; //Baeume=Datentyp = Speichert i-te Stelle des Arrays nbaeume
            s.draw(); //Draw-Methode der i-ten Stelle des Arrays wird aufgerufen und ausgef�hrt
        }
        Abschlussaufgabe.crc2.fillStyle = '#000000';
        Abschlussaufgabe.crc2.font = "12px Arial";
        Abschlussaufgabe.crc2.fillText("Low-Score: " + score, 700, 20);
        window.setTimeout(animate, 20);
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Main.js.map