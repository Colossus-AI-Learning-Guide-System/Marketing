import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Check, Monitor, X } from "lucide-react";

interface BrowserItem {
  name: string;
  supported: boolean;
  value?: number;
}

const items = [
    {
        feature: "AI-Powered Document Analysis",
        desktop: [
            { name: "NotebookLM", supported: true },
            { name: "Obsidian", supported: false },
            { name: "Kumu", supported: false },
            { name: "InfraNodus", supported: true },
            { name: "Heptabase", supported: false },
            { name: "Reasearch-Rabbit", supported: false },
            { name: "Napkin AI", supported: false },
            { name: "Mindmap AI", supported: false },
            { name: "Colossus AI", supported: true },
        ] as BrowserItem[],
    },
    {
        feature: "Roadmap Visualization",
        desktop: [
                { name: "NotebookLM", supported: false },
                { name: "Obsidian", supported: true },
                { name: "Kumu", supported: true },
                { name: "InfraNodus", supported: true },
                { name: "Heptabase", supported: true },
                { name: "Reasearch-Rabbit", supported: false },
                { name: "Napkin AI", supported: false },
                { name: "Mindmap AI", supported: false },
                { name: "Colossus AI", supported: true },
        ],
    },
    {
        feature: "Knowledge Graph Generation",
        desktop: [
                { name: "NotebookLM", supported: true },
                { name: "Obsidian", supported: true },
                { name: "Kumu", supported: true },
                { name: "InfraNodus", supported: true },
                { name: "Heptabase", supported: false },
                { name: "Reasearch-Rabbit", supported: false },
                { name: "Napkin AI", supported: false },
                { name: "Mindmap AI", supported: false },
                { name: "Colossus AI", supported: true },
        ],
    },
    {
        feature: "Interactivity with Graphs",
        desktop: [
                { name: "NotebookLM", supported: false},
                { name: "Obsidian", supported: true },
                { name: "Kumu", supported: true },
                { name: "InfraNodus", supported: true },
                { name: "Heptabase", supported: true },
                { name: "Reasearch-Rabbit", supported: false },
                { name: "Napkin AI", supported: false },
                { name: "Mindmap AI", supported: false },
                { name: "Colossus AI", supported: true },
        ],
    },
    {
        feature: "Automatic Information Linking",
        desktop: [
                { name: "NotebookLM", supported: true },
                { name: "Obsidian", supported: false },
                { name: "Kumu", supported: false },
                { name: "InfraNodus", supported: true },
                { name: "Heptabase", supported: false },
                { name: "Reasearch-Rabbit", supported: false },
                { name: "Napkin AI", supported: false },
                { name: "Mindmap AI", supported: false },
                { name: "Colossus AI", supported: true },
        ],
    },
    {
        feature: "Manual Customization",
        desktop: [
                { name: "NotebookLM", supported: true },
                { name: "Obsidian", supported: true },
                { name: "Kumu", supported: false },
                { name: "InfraNodus", supported: true },
                { name: "Heptabase", supported: false },
                { name: "Reasearch-Rabbit", supported: false },
                { name: "Napkin AI", supported: false },
                { name: "Mindmap AI", supported: false },
                { name: "Colossus AI", supported: true },
        ],
    },
    {
        feature: "Information Retrieval",
        desktop: [
                { name: "NotebookLM", supported: true },
                { name: "Obsidian", supported: true },
                { name: "Kumu", supported: false },
                { name: "InfraNodus", supported: true },
                { name: "Heptabase", supported: false },
                { name: "Reasearch-Rabbit", supported: false },
                { name: "Napkin AI", supported: false },
                { name: "Mindmap AI", supported: false },
                { name: "Colossus AI", supported: true },
        ],
    },
    {
        feature: "Plugin Ecosystem",
        desktop: [
                { name: "NotebookLM", supported: true },
                { name: "Obsidian", supported: true },
                { name: "Kumu", supported: false },
                { name: "InfraNodus", supported: true },
                { name: "Heptabase", supported: false },
                { name: "Reasearch-Rabbit", supported: false },
                { name: "Napkin AI", supported: false },
                { name: "Mindmap AI", supported: false },
                { name: "Colossus AI", supported: true },
        ],
    },
    {
        feature: "Ease of Use",
        desktop: [
                { name: "NotebookLM", supported: true },
                { name: "Obsidian", supported: true },
                { name: "Kumu", supported: false },
                { name: "InfraNodus", supported: true },
                { name: "Heptabase", supported: false },
                { name: "Reasearch-Rabbit", supported: false },
                { name: "Napkin AI", supported: false },
                { name: "Mindmap AI", supported: false },
                { name: "Colossus AI", supported: true },
        ],
    },
    {
        feature: "- Total Efficiency Percentage -",
        isPercentage: true,
        desktop: [
                { name: "NotebookLM", value: 78, supported: true },
                { name: "Obsidian", value: 67, supported: true },
                { name: "Kumu", value: 44, supported: false },
                { name: "InfraNodus", value: 89, supported: true },
                { name: "Heptabase", value: 22, supported: false },
                { name: "Reasearch-Rabbit", value: 11, supported: false },
                { name: "Napkin AI", value: 33, supported: false },
                { name: "Mindmap AI", value: 22, supported: false },
                { name: "Colossus AI", value: 90, supported: true },
        ],
    },
];

function CompatibilityTable() {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-white/10 bg-[#2d2d2d] p-4 shadow-lg">
      <h3 className="mb-4 text-center text-xl font-semibold text-[#e1e1e1]">Compititors</h3>
      <Table className="bg-background">
        <TableHeader>
          <TableRow className="border-y-0 *:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
            {/*<TableHead className="border-b border-border text-center" colSpan={10}>
            </TableHead>*/}
          </TableRow>
        </TableHeader>
        <TableHeader>
          <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
            <TableCell></TableCell>
            {items[0].desktop.map((browser) => (
              <TableHead
                key={browser.name}
                className={`h-auto rotate-180 py-3 text-foreground [writing-mode:vertical-lr] ${
                  browser.name === "Colossus AI" ? "bg-gradient-to-r from-[#FF9F4A] via-[#FF4A8D] to-[#8B4AFF] bg-clip-text text-transparent font-bold" : ""
                }`}
              >
                {browser.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, itemIndex) => (
            <TableRow key={itemIndex} className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableCell className="font-medium text-foreground">
                {item.feature}
              </TableCell>
              {item.desktop.map((browser, index) => (
                <TableCell key={`${browser.name}-${index}`} className="space-y-1 text-center">
                  {item.isPercentage ? (
                    <span className={browser.name === "Colossus AI" ? "font-bold text-[#FF4A8D]" : ""}>
                      {browser.value}%
                    </span>
                  ) : browser.supported ? (
                    <Check
                      className="inline-flex stroke-emerald-600"
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  ) : (
                    <X
                      className="inline-flex stroke-red-600"
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  )}
                  <span className="sr-only">{browser.supported ? "Supported" : "Not supported"}</span>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export { CompatibilityTable };
