/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://dan-travels.com',
  generateRobotsTxt: false, // Erstellt auch robots.txt
  sitemapSize: 5000,
  generateIndexSitemap: false, // Verhindert separate Index-Sitemaps
  exclude: ['/admin', '/secret'], // Falls du Seiten ausschließen willst
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};
