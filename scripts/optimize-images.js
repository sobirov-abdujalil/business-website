#!/usr/bin/env node

/**
 * Image Optimization Script
 *
 * This script helps optimize images for the business website.
 * It provides commands to generate different favicon sizes and optimize images.
 *
 * Usage:
 * node scripts/optimize-images.js favicons
 * node scripts/optimize-images.js optimize
 */

const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = path.join(__dirname, "../public");
const IMAGES_DIR = path.join(PUBLIC_DIR, "images");

// Favicon sizes for different platforms
const FAVICON_SIZES = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "android-chrome-192x192.png", size: 192 },
  { name: "android-chrome-512x512.png", size: 512 },
  { name: "mstile-150x150.png", size: 150 },
  { name: "maskable-icon.png", size: 512 },
];

// Image optimization settings
const IMAGE_OPTIMIZATION = {
  hero: { quality: 85, maxWidth: 1920 },
  team: { quality: 80, maxWidth: 400 },
  services: { quality: 80, maxWidth: 300 },
  blog: { quality: 80, maxWidth: 800 },
  about: { quality: 80, maxWidth: 800 },
};

function createDirectories() {
  const dirs = [
    path.join(IMAGES_DIR, "logo"),
    path.join(IMAGES_DIR, "hero"),
    path.join(IMAGES_DIR, "team"),
    path.join(IMAGES_DIR, "services"),
    path.join(IMAGES_DIR, "about"),
    path.join(IMAGES_DIR, "blog"),
    path.join(IMAGES_DIR, "misc"),
  ];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
}

function generateFavicons() {
  console.log("🔄 Generating favicons...");

  // This would typically use a library like sharp or imagemin
  // For now, we'll just create placeholder files
  FAVICON_SIZES.forEach(({ name, size }) => {
    const filePath = path.join(PUBLIC_DIR, name);
    if (!fs.existsSync(filePath)) {
      // Create a placeholder file
      fs.writeFileSync(filePath, `# Placeholder for ${name} (${size}x${size})`);
      console.log(`Created placeholder: ${name}`);
    }
  });

  console.log("✅ Favicon generation complete!");
  console.log("\n📋 Next steps:");
  console.log("1. Replace placeholder files with actual optimized images");
  console.log("2. Use tools like:");
  console.log("   - https://realfavicongenerator.net/");
  console.log("   - https://favicon.io/");
  console.log("   - ImageOptim or TinyPNG for compression");
}

function optimizeImages() {
  console.log("🔄 Optimizing images...");

  // This would typically use sharp or imagemin
  // For now, we'll provide guidance
  console.log("✅ Image optimization guidance:");
  console.log("\n📋 Recommended tools:");
  console.log("1. Sharp (Node.js library)");
  console.log("2. ImageOptim (Mac)");
  console.log("3. TinyPNG (Online)");
  console.log("4. Squoosh (Google)");

  console.log("\n🎯 Optimization targets:");
  Object.entries(IMAGE_OPTIMIZATION).forEach(([category, settings]) => {
    console.log(
      `- ${category}: ${settings.quality}% quality, max ${settings.maxWidth}px width`
    );
  });
}

function showUsage() {
  console.log(`
📸 Image Optimization Script

Usage:
  node scripts/optimize-images.js <command>

Commands:
  favicons    Generate favicon files for all platforms
  optimize    Show image optimization guidance
  setup       Create directory structure
  help        Show this help message

Examples:
  node scripts/optimize-images.js setup
  node scripts/optimize-images.js favicons
  node scripts/optimize-images.js optimize
`);
}

function main() {
  const command = process.argv[2] || "help";

  switch (command) {
    case "favicons":
      generateFavicons();
      break;
    case "optimize":
      optimizeImages();
      break;
    case "setup":
      createDirectories();
      break;
    case "help":
    default:
      showUsage();
      break;
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  createDirectories,
  generateFavicons,
  optimizeImages,
  FAVICON_SIZES,
  IMAGE_OPTIMIZATION,
};
