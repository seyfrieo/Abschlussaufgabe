//Aufgabe: (Aufgabe 06)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (24.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var Baeume = /** @class */ (function () {
        function Baeume(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        Baeume.prototype.draw = function () {
            Abschlussaufgabe.crc2.fillStyle = "#90EE90";
            Abschlussaufgabe.crc2.fillRect(this.x, this.y, 20, 30);
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x - 30, this.y);
            Abschlussaufgabe.crc2.lineTo(this.x + 10, this.y - 100);
            Abschlussaufgabe.crc2.lineTo(this.x + 50, this.y);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fillStyle = "#90EE90";
            Abschlussaufgabe.crc2.fill();
        };
        return Baeume;
    }());
    Abschlussaufgabe.Baeume = Baeume;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Baeume.js.map