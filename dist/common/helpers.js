"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createError = void 0;
const constants_1 = require("./constants");
const createError = (message = "something went wrong.") => {
    return Object.assign(Object.assign({}, constants_1.ERROR), { message });
};
exports.createError = createError;
//# sourceMappingURL=helpers.js.map