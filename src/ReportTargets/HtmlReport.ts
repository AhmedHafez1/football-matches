import { OutputTarget } from '../Summary';
import fs from 'fs';

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
    <h2>
      Winning Report
    </h2>
    <div>
      ${report}
    </div>
    `;

    fs.writeFileSync(`win-report.html`, html);
  }
}
