import { existsSync, readdirSync, unlinkSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import registry from '../src/data/blogs/_registry.json' with { type: 'json' };

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BLOGS_DIR = join(ROOT, 'src', 'data', 'blogs');

// Categories list
const categories = [
  "trademark",
  "patent",
  "copyright-design",
  "geographical-indication",
  "startups",
  "contracts",
  "compliance-roc",
  "litigation",
  "ip-licensing",
  "international-ip",
  "tech-ai-privacy",
  "location",
  "industry",
  "comparison",
  "legal-news",
  "glossary-faq",
  "checklists",
  "how-to"
];

function main() {
  console.log('Starting cleanup of extra blog files...');

  // Build a set of valid filenames per category
  const validFiles = new Map();
  categories.forEach(cat => validFiles.set(cat, new Set()));

  registry.forEach(entry => {
    const { category, slug } = entry;
    if (validFiles.has(category)) {
      validFiles.get(category).add(`${slug}.ts`);
    }
  });

  let deletedCount = 0;
  let keptCount = 0;

  categories.forEach(category => {
    const catDir = join(BLOGS_DIR, category);
    if (!existsSync(catDir)) return;

    const files = readdirSync(catDir);
    const validSet = validFiles.get(category);

    files.forEach(file => {
      // Only check .ts files
      if (!file.endsWith('.ts')) return;

      if (!validSet.has(file)) {
        const filePath = join(catDir, file);
        unlinkSync(filePath);
        deletedCount++;
      } else {
        keptCount++;
      }
    });
  });

  console.log(`Cleanup completed.`);
  console.log(`  Deleted: ${deletedCount} extra files`);
  console.log(`  Kept:    ${keptCount} valid files`);
}

main();
