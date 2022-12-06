"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDate = void 0;
const parseDate = (dateString) => {
    const dateParts = dateString
        .split("/")
        .map((value) => parseInt(value));
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.parseDate = parseDate;
