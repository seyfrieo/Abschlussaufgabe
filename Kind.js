//Abschlussaufgabe - Rodelhang Terminator
//Dominik Seyfried
//256734
//17.02.2019
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
    var Kind = /** @class */ (function (_super) {
        __extends(Kind, _super);
        function Kind(_x, _y) {
            var _this = _super.call(this, _x, _y) || this;
            _this.type = "kind";
            _this._dx = 1;
            _this._dy = 0.15;
            _this.got_hit = false;
            _this.goes_up = false;
            return _this;
        }
        Kind.prototype.move = function () {
            if (this.x < 800 || this.got_hit == false) {
                if (this.x > 800) {
                    this.goes_up = true;
                    this._dx = -2;
                    this._dy = -0.36;
                    //this.y = Math.random() * (400 - 270) + 270;
                }
                if (this.x <= 0) {
                    this.goes_up = false;
                    this.reset_speed();
                }
                if (this.x > 0 && this.goes_up == false || this.got_hit == true)
                    this.accelerate();
                this.x += this._dx; //Bewegung/Steigung
                this.y += this._dy;
                this.draw();
            }
        };
        Kind.prototype.draw = function () {
            if (this.got_hit == false) {
                Abschlussaufgabe.crc2.beginPath();
                Abschlussaufgabe.crc2.arc(this.x, this.y, 9, 0, 2 * Math.PI);
                Abschlussaufgabe.crc2.fillStyle = 'black';
                Abschlussaufgabe.crc2.fill();
                Abschlussaufgabe.crc2.fillRect(this.x - 5, this.y, 10, 25);
                Abschlussaufgabe.crc2.fillStyle = '#d4b28c';
                Abschlussaufgabe.crc2.fillRect(this.x - 20, this.y + 30, 40, 5);
                Abschlussaufgabe.crc2.fillRect(this.x - 20, this.y + 23, 40, 5);
            }
            else if (this.got_hit == true) {
                Abschlussaufgabe.crc2.fillStyle = '#d4b28c';
                Abschlussaufgabe.crc2.fillRect(this.x - 20, this.y + 30, 40, 5);
                Abschlussaufgabe.crc2.fillRect(this.x - 20, this.y + 23, 40, 5);
            }
        };
        Kind.prototype.reset_speed = function () {
            this._dx = 1;
            this._dy = 0.15;
        };
        Kind.prototype.get_speed = function () {
            return (this._dx + this._dy);
        };
        Kind.prototype.accelerate = function () {
            this._dx += 0.075;
            this._dy += 0.015;
        };
        return Kind;
    }(Abschlussaufgabe.MovingObjects));
    Abschlussaufgabe.Kind = Kind;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Kind.js.map