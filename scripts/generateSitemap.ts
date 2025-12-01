import { posts } from '../src/data/posts';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type SitemapUrl = {
    url: string;
    lastmod?: string;
    changefreq: string;
    priority: string;
};

const generateSitemap = () => {
    const siteUrl = 'https://blog.anubhavprasai.com.np';
    const today = new Date().toISOString().split('T')[0];

    // Static pages
    const staticPages: SitemapUrl[] = [
        { url: '', changefreq: 'daily', priority: '1.0' }, // Homepage
        { url: 'about', changefreq: 'monthly', priority: '0.8' },
    ];

    // Generate URLs for all posts
    const postUrls: SitemapUrl[] = posts.map(post => ({
        url: `essay/${post.slug}`,
        lastmod: post.publishDate,
        changefreq: 'monthly',
        priority: '0.9',
    }));

    const allUrls = [...staticPages, ...postUrls];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
            .map(
                ({ url, lastmod, changefreq, priority }) => `  <url>
    <loc>${siteUrl}/${url}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : `<lastmod>${today}</lastmod>`}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
            )
            .join('\n')}
</urlset>`;

    const publicDir = path.join(__dirname, '../public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }

    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf-8');

    console.log('✅ Sitemap generated successfully at public/sitemap.xml');
    console.log(`📝 Contains ${allUrls.length} URLs (${staticPages.length} static pages + ${postUrls.length} posts)`);
};

try {
    generateSitemap();
} catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
}
