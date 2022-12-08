"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
const fs_1 = __importDefault(require("fs"));
class HtmlReport {
    print(report) {
        const html = `
    <h2>
      Winning Report
    </h2>
    <div>
      ${report}
    </div>
    `;
        fs_1.default.writeFileSync(`reports/win-report.html`, html);
    }
}
exports.HtmlReport = HtmlReport;
