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
    var Schneeball = /** @class */ (function (_super) {
        __extends(Schneeball, _super);
        function Schneeball(_x, _y) {
            var _this = _super.call(this, _x, _y) || this;
            _this.size = 100;
            _this.timer = 50;
            _this.type = "schneeball";
            _this.hit = false;
            return _this;
        }
        Schneeball.prototype.move = function () {
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
                Abschlussaufgabe.checkCollsision(this);
        };
        Schneeball.prototype.draw = function () {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.fillStyle = '#000000';
            Abschlussaufgabe.crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fill();
        };
        return Schneeball;
    }(Abschlussaufgabe.MovingObjects));
    Abschlussaufgabe.Schneeball = Schneeball;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Schneeball.js.map