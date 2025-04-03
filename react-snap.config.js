module.exports = {
  source: 'dist', // Vite builds to "dist", not "build"
  destination: 'dist', // Output to the same folder
  include: ['/', '/about', '/contact', '/calculator', '/disclaimer', '/privacy-policy'],
  minifyHtml: true,
  // Add these Vite-specific options:
  puppeteerArgs: ['--no-sandbox'], // Required for some environments
  timeout: 10000, // Increase timeout if content takes time to load
};