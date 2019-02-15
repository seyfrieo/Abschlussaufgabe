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
            return _this;
        }
        Kind.prototype.move = function () {
            if (this.x < 800 || this.got_hit == false) {
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
            this._dx = 0.5;
            this._dy = 0.075;
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