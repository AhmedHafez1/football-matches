"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalyzer_1 = require("./Analyzers/WinsAnalyzer");
const ConsoleReport_1 = require("./ReportTargets/ConsoleReport");
const HtmlReport_1 = require("./ReportTargets/HtmlReport");
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static winMatchesHtml(team) {
        return new Summary(new WinsAnalyzer_1.WinsAnalyzer(team), new HtmlReport_1.HtmlReport());
    }
    static winMatchesConsole(team) {
        return new Summary(new WinsAnalyzer_1.WinsAnalyzer(team), new ConsoleReport_1.ConsoleReport());
    }
    buildAndPrint(matches) {
        const report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    }
}
exports.Summary = Summary;
