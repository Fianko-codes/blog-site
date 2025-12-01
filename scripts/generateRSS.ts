import { posts } from '../src/data/posts';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case "'": return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

const generateRSS = () => {
  // You should replace this with your actual domain when deployed
  const siteUrl = 'https://blog.anubhavprasai.com.np';
  const buildDate = new Date().toUTCString();

  // Sort posts by date, newest first
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  const rssItems = sortedPosts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteUrl}/essay/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/essay/${post.slug}</guid>
      <pubDate>${new Date(post.publishDate).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
      <content:encoded><![CDATA[${post.content}]]></content:encoded>
      <category>${escapeXml(post.category)}</category>
${post.tags.map((tag) => `      <category>${escapeXml(tag)}</category>`).join('\n')}
    </item>`
    )
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/rss.xsl"?>
<rss version="2.0" 
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Quiet Prose</title>
    <link>${siteUrl}</link>
    <description>Longform explorations of ideas worth sitting with</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
${rssItems}
  </channel>
</rss>`;

  // Write to public directory
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'rss.xml'), rss, 'utf-8');

  console.log('✅ RSS feed generated successfully at public/rss.xml');
  console.log(`📝 Contains ${sortedPosts.length} posts`);
  console.log(`🕒 Last build: ${buildDate}`);
};

// Generate the RSS feed
try {
  generateRSS();
} catch (error) {
  console.error('❌ Error generating RSS feed:', error);
  process.exit(1);
}
