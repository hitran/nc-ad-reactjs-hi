var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rectangle = /** @class */ (function () {
    function Rectangle() {
        var _this = this;
        this.length = 2;
        this.width = 1;
        this.height = 3;
        this.getDimension = function () { return _this.length * _this.width * _this.height; };
    }
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.length = 1;
        _this.width = 1;
        _this.height = 1;
        return _this;
    }
    return Square;
}(Rectangle));
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = null;
        _this.color = '';
        _this.getLabel = function () { return _this.color + "-" + _this.id; };
        return _this;
    }
    return Box;
}(Square));
var box001 = new Box();
box001.id = 123;
box001.color = 'Red';
console.log("Box " + box001.getLabel() + " has a dimension of " + box001.getDimension());
/* Create 3 functions with callback hell which uses interface */
var add10 = function (x, cb) {
    cb(x);
};
var add = function (x, cb) {
    cb(x + 10);
};
var printResult = function (x) {
    console.log(x);
};
add10(15, function (x) { return add(x, printResult); });
