export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  category: string;
  publishDate: string;
  readingTime: number;
  slug: string;
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'Welcome to Quiet Prose',
    excerpt: 'A first look at what this blog is about.',
    content: 'Welcome to my new blog. This is the first post.',
    tags: ['welcome', 'intro'],
    category: 'General',
    publishDate: '2025-12-01T12:00:00Z',
    readingTime: 1,
    slug: 'welcome-to-quiet-prose'
  }
];
