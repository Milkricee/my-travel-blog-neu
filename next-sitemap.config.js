/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://dan-travels.com',
  generateRobotsTxt: true, // Erstellt auch robots.txt
  sitemapSize: 5000,
  exclude: ['/admin', '/secret'], // Falls du Seiten ausschließen willst
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      'https://dan-travels.com/server-sitemap.xml', // Falls du API-Routen hast
    ],
  },
};
