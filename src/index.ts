import { inspectChromiumTree } from "./audit/chromium-inspector.ts";
import { CHROMIUM_DEPENDENCY_AUDIT } from "./audit/purge-matrix.ts";
import { runAllBenchmarks } from "./benchmarks/runner.ts";
import { SOVEREIGN_LAYERS, getAllLayers } from "./layers.ts";
import { CANONICAL_HARDWARE } from "./winner-picker.ts";

export * from "./types.ts";
export * from "./layers.ts";
export * from "./audit/chromium-inspector.ts";
export * from "./audit/purge-matrix.ts";
export * from "./winner-picker.ts";
export * from "./benchmarks/runner.ts";

async function main() {
  const args = process.argv.slice(2);
  const command = args[0] || "all";

  if (command === "inspect") {
    const inspection = inspectChromiumTree();
    console.log(JSON.stringify(inspection, null, 2));
  } else if (command === "layers") {
    console.log(JSON.stringify(getAllLayers(), null, 2));
  } else if (command === "matrix") {
    console.log(JSON.stringify(CHROMIUM_DEPENDENCY_AUDIT, null, 2));
  } else {
    await runAllBenchmarks();
  }
}

if (import.meta.main) {
  main();
}
