# The Quiet Laboratory

A personal publication featuring longform essays and thoughtful reflections.

## Project Structure

- `src/pages`: Main application pages
- `src/components`: Reusable UI components
- `src/data`: Content storage (posts.ts)
- `src/lib`: Utility functions
- `public`: Static assets

## Features

- **RSS Feed**: Automatically generated RSS 2.0 feed for subscribers
- **SEO Optimized**: Meta tags, Open Graph support, and sitemap generation
- **Reader Engagement**: Reading progress indicator, social sharing, and related posts
- **Dark Mode**: User-preference aware dark/light theme
- **Responsive Design**: Mobile-friendly layout using Tailwind CSS

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Content Management

Posts are stored in `src/data/posts.ts`. To add a new post, simply add a new object to the `posts` array with the following structure:

```typescript
{
  id: "unique-id",
  title: "Post Title",
  excerpt: "Brief summary...",
  content: "Full content...",
  tags: ["tag1", "tag2"],
  category: "Mathematics" | "CS & AI" | "Reflections",
  publishDate: "YYYY-MM-DD",
  readingTime: 5,
  slug: "url-slug"
}
```

## License

MIT
