import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Check, Monitor, X } from "lucide-react";

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
      { name: "Colossus AI", supported: false },
    ],
  },
  {
    feature: "Roadmap Visualization",
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
    feature: "Knowledge Graph Generation",
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
    feature: "Interactivity with Graphs",
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
    feature: "Automatic Information Linking",
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
        { name: "Colossus AI", supported: false },
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
                className="h-auto rotate-180 py-3 text-foreground [writing-mode:vertical-lr]"
              >
                {browser.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.feature} className="*:border-border [&>:not(:last-child)]:border-r">
              <TableHead className="font-medium text-foreground">{item.feature}</TableHead>
              {item.desktop.map((browser, index) => (
                <TableCell key={`${browser.name}-${index}`} className="space-y-1 text-center">
                  {browser.supported ? (
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
