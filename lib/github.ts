export interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  fork: boolean;
  topics: string[];
}

export async function getRepos(): Promise<Repo[]> {
  try {
    const response = await fetch(
      "https://api.github.com/users/TheSmoothRere/repos?sort=updated&per_page=100",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "TheSmoothRere-Portfolio", // Add this!
          // Add your token here once you have it
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `token ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      console.error(`Failed to fetch repositories: ${response.statusText}`);
      return [];
    }

    const repos: Repo[] = await response.json();
    return repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
  } catch (error) {
    console.error("Error fetching repos:", error);
    return [];
  }
}
