import { LineCount,GlobalResults } from "@sctg/code-stats";
LineCount.countLines("src").then((results: GlobalResults) => {
  console.log(results);
});
