const fs = require("node:fs/promises");
const path = require("node:path");

async function copyStaticExport() {
  const projectDir = path.resolve(__dirname, "..");
  const exportDir = path.join(projectDir, "out");
  const destinationDir = path.resolve(projectDir, "..", "build");

  const exportStats = await fs.stat(exportDir).catch(error => {
    if (error.code === "ENOENT") {
      throw new Error(`Static export directory was not found: ${exportDir}`);
    }
    throw error;
  });

  if (!exportStats.isDirectory()) {
    throw new Error(`Static export path is not a directory: ${exportDir}`);
  }

  await fs.rm(destinationDir, { recursive: true, force: true });
  await fs.cp(exportDir, destinationDir, { recursive: true });
  console.log(`Copied static export to ${destinationDir}`);
}

copyStaticExport().catch(error => {
  console.error("Failed to copy the static export:", error);
  process.exitCode = 1;
});
