import { z } from "./index.ts";

async function run() {
  console.log(z.string().minLength);
  console.log(z.string().maxLength);
}

run();
