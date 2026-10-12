import fs from "fs";
import path from "path";

/**
 * Reads a markdown file synchronously from the public folder on the server.
 * Ensures blog posts are fully server-rendered in the initial HTML for SEO and crawlers.
 * @param {string} filePath - Relative file path in /public, e.g. "/blogs/01.md"
 * @returns {string} Raw markdown string
 */
export function getBlogContent(filePath) {
  if (!filePath) return "";
  try {
    const normalized = filePath.startsWith("/") ? filePath.slice(1) : filePath;
    const fullPath = path.join(process.cwd(), "public", normalized);
    if (!fs.existsSync(fullPath)) {
      console.warn(`Blog markdown file not found at: ${fullPath}`);
      return "";
    }
    return fs.readFileSync(fullPath, "utf-8");
  } catch (err) {
    console.error("Error reading blog markdown on server:", err);
    return "";
  }
}
