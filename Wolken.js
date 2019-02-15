//Aufgabe: (Aufgabe 06)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (24.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var Wolke = /** @class */ (function (_super) {
        __extends(Wolke, _super);
        function Wolke(_x, _y) {
            return _super.call(this, _x, _y) || this;
        }
        Wolke.prototype.move = function () {
            if (this.x > 850) {
                this.x = 0;
            }
            this.x += Math.random();
            this.draw();
        };
        Wolke.prototype.draw = function () {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#FFB6C1";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 40, this.y, 30, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#FFB6C1";
            Abschlussaufgabe.crc2.fill();
        };
        return Wolke;
    }(Abschlussaufgabe.MovingObjects));
    Abschlussaufgabe.Wolke = Wolke;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Wolken.js.map