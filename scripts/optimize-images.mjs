import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const imgDir = path.join(root, "public", "img");

async function main() {
  const entries = await fs.readdir(imgDir);
  const pngs = entries.filter((f) => f.toLowerCase().endsWith(".png"));

  if (pngs.length === 0) {
    console.log("No PNG files found in public/img");
    return;
  }

  for (const file of pngs) {
    const inputPath = path.join(imgDir, file);
    const outPath = path.join(imgDir, file.replace(/\.png$/i, ".webp"));

    const img = sharp(inputPath, { failOn: "none" });
    const meta = await img.metadata();

    // Keep original dimensions to preserve PPT text clarity.
    // Using WebP quality compression yields major size reduction.
    await img
      .webp({
        quality: 80,
        effort: 5,
      })
      .toFile(outPath);

    const [inStat, outStat] = await Promise.all([fs.stat(inputPath), fs.stat(outPath)]);
    const inKb = (inStat.size / 1024).toFixed(0);
    const outKb = (outStat.size / 1024).toFixed(0);
    console.log(
      `${file} (${meta.width ?? "?"}x${meta.height ?? "?"})  ${inKb}KB -> ${path.basename(outPath)} ${outKb}KB`,
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});

