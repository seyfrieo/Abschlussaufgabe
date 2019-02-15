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
    var Schnee = /** @class */ (function (_super) {
        __extends(Schnee, _super);
        function Schnee(_x, _y) {
            return _super.call(this, _x, _y) || this;
        }
        Schnee.prototype.move = function () {
            if (this.y > 600) {
                this.y = 0;
            }
            this.y += 1;
            this.draw();
        };
        Schnee.prototype.draw = function () {
            Abschlussaufgabe.crc2.fillStyle = "#ffffff";
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 2.5, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fill();
        };
        return Schnee;
    }(Abschlussaufgabe.MovingObjects));
    Abschlussaufgabe.Schnee = Schnee;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Schnee.js.map