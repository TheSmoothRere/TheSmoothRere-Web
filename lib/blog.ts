export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  readingTime: string;
}

export async function getPosts(): Promise<BlogPost[]> {
  // Mock data for now, could be replaced with MDX or a CMS later
  const posts: BlogPost[] = [];

  // Sort by date descending
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}
