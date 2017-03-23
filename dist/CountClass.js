/**
 * Created by administrator on 23/03/2017.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CountClass = (function () {
    //constructor
    function CountClass() {
        this._count = 0;
    }
    //methods
    CountClass.prototype.countUp = function () {
        this._count++;
    };
    CountClass.prototype.getCount = function () {
        return this._count;
    };
    return CountClass;
}());
exports.default = CountClass;
//# sourceMappingURL=CountClass.js.map