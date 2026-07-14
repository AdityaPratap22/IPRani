/**
 * Blog content generator script.
 * 
 * Usage: node scripts/generate-blogs.mjs <category> <startIndex> <endIndex>
 * 
 * This script generates blog .ts content files for a given category.
 * Each file exports a default HTML string with 2000-3000 words and 7-8 internal links.
 */

import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BLOGS_DIR = join(ROOT, 'src', 'data', 'blogs');
const REGISTRY_PATH = join(BLOGS_DIR, '_registry.ts');

// Read registry to get blog entries
function getRegistry() {
  const content = readFileSync(REGISTRY_PATH, 'utf-8');
  // Extract the array from the TS file
  const match = content.match(/export const blogRegistry[^=]*=\s*(\[[\s\S]*\]);/);
  if (!match) throw new Error('Could not parse registry');
  // Use Function constructor to evaluate the array (safe for local scripts)
  return new Function(`return ${match[1]}`)();
}

console.log('Blog content generator ready.');
console.log('Registry path:', REGISTRY_PATH);
console.log('Blogs dir:', BLOGS_DIR);
