import fs from 'node:fs';
import path from 'node:path';

const projectFiles = [
  'cascobay.html', 'cumberland.html', 'newenglandbarn.html', 'island.html',
  'joy.html', 'montsweag.html', 'lily.html', 'middlebury.html', 'lakehouse.html',
  'phippsburg.html', 'cottage.html', 'madison.html', 'pocono.html', 'waterford.html',
  'gotham.html', 'writerscabin.html', 'pergola.html', 'pagoda.html', 'gazebo.html',
  'santachalet.html', 'dresden.html', 'guest.html', 'entry.html', 'sturbridge.html', 'brigadoon.html'
];

const summaries = [];

for (const f of projectFiles) {
  const filePath = path.join('scraped_pages', f);
  if (!fs.existsSync(filePath)) continue;
  const html = fs.readFileSync(filePath, 'utf8');

  // Title
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].replace(/\|.*$/i, '').trim() : f;

  // Headings
  const h1s = [...html.matchAll(/<h1[^>]*>(.*?)<\/h1>/gis)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const h2s = [...html.matchAll(/<h2[^>]*>(.*?)<\/h2>/gis)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const h3s = [...html.matchAll(/<h3[^>]*>(.*?)<\/h3>/gis)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

  // Paragraphs
  const ps = [...html.matchAll(/<p[^>]*>(.*?)<\/p>/gis)]
    .map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
    .filter(p => p.length > 30 && !p.includes('Montsweag Brook Corporation') && !p.includes('All rights reserved'));

  // Images
  const imgTags = [...html.matchAll(/<img[^>]+src=["'](images\/[^"']+)["'][^>]*alt=["']([^"']*)["']/gi)]
    .map(m => ({ src: m[1], alt: m[2] }));

  // Floor plans or drawings or elevations
  const floorPlans = imgTags.filter(img => 
    img.src.toLowerCase().includes('plan') || 
    img.src.toLowerCase().includes('elev') ||
    img.alt.toLowerCase().includes('plan') ||
    img.alt.toLowerCase().includes('drawing')
  );

  summaries.push({
    file: f,
    title,
    h1: h1s.join(' | '),
    h2: h2s.slice(0, 5).join(' | '),
    h3: h3s.slice(0, 5).join(' | '),
    keyParagraphs: ps.slice(0, 4),
    totalImages: imgTags.length,
    floorPlans: floorPlans.map(fp => fp.src),
    sampleImages: imgTags.slice(0, 8).map(img => ({ src: img.src, alt: img.alt }))
  });
}

fs.writeFileSync('parsed_projects.json', JSON.stringify(summaries, null, 2), 'utf8');
console.log(`Parsed ${summaries.length} projects.`);
summaries.forEach(s => {
  console.log(`- ${s.file}: ${s.title} (${s.totalImages} images, ${s.floorPlans.length} plans/drawings)`);
});
