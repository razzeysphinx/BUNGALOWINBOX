import fs from 'node:fs';
import path from 'node:path';

const pages = [
  'cumberland.html', 'newenglandbarn.html', 'island.html', 'joy.html',
  'cascobay.html', 'montsweag.html', 'lily.html', 'middlebury.html',
  'lakehouse.html', 'phippsburg.html', 'cottage.html', 'madison.html',
  'pocono.html', 'waterford.html', 'gotham.html', 'writerscabin.html',
  'pergola.html', 'pagoda.html', 'gazebo.html', 'santachalet.html',
  'dresden.html', 'guest.html', 'entry.html', 'sturbridge.html', 'brigadoon.html', 'projects.html',
  'index.html', 'portfolio.html', 'design.html', 'about.html', 'contact.html', 'pricing.html', 'news.html', 'unboxing.html'
];

const outDir = path.resolve('scraped_pages');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function scrapeAll() {
  const results = [];
  const allImages = new Set();

  for (const page of pages) {
    const url = `https://bungalowinabox.com/${page}`;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.log(`Failed to fetch ${url}: ${res.status}`);
        continue;
      }
      const html = await res.text();
      fs.writeFileSync(path.join(outDir, page), html, 'utf8');
      
      // Extract title, description, h1, h2, h3, images, paragraphs
      const titleMatch = html.match(/<title>(.*?)<\/title>/i);
      const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["']/i);
      
      const imgMatches = [...html.matchAll(/src=["'](images\/[^"']+)["']/gi)].map(m => m[1]);
      const hrefImgMatches = [...html.matchAll(/href=["'](images\/[^"']+)["']/gi)].map(m => m[1]);
      const pageImages = [...new Set([...imgMatches, ...hrefImgMatches])];
      pageImages.forEach(img => allImages.add(img));

      results.push({
        page,
        title: titleMatch ? titleMatch[1].trim() : '',
        description: descMatch ? descMatch[1].trim() : '',
        images: pageImages,
        length: html.length
      });
      console.log(`Successfully scraped ${page} (${pageImages.length} images found)`);
    } catch (err) {
      console.error(`Error scraping ${page}:`, err.message);
    }
  }

  fs.writeFileSync('site_inventory.json', JSON.stringify({
    scrapedAt: new Date().toISOString(),
    pagesCount: results.length,
    totalUniqueImages: allImages.size,
    allImages: Array.from(allImages).sort(),
    pages: results
  }, null, 2), 'utf8');

  console.log(`\nAudit complete! Scraped ${results.length} pages. Total unique images: ${allImages.size}`);
}

scrapeAll();
