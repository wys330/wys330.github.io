import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '@/data/site';
import { sortPosts } from '@/utils/posts';

export async function GET(context: { site: URL }) {
  const posts = sortPosts((await getCollection('blog')).filter((post) => !post.data.draft));

  return rss({
    title: site.title,
    description: site.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
  });
}
