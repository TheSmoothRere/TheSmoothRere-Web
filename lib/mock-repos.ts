import { Repo } from "./github";

export const MOCK_REPOS: Repo[] = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `Project ${i + 1}`,
  description: `This is a detailed description for Project ${i + 1}. It showcases how the project card looks with different lengths of content and features.`,
  html_url: "https://github.com/TheSmoothRere",
  homepage: "https://thesmoothrere.com",
  stargazers_count: Math.floor(Math.random() * 100),
  forks_count: Math.floor(Math.random() * 50),
  language: ["TypeScript", "Rust", "Go", "Python", "Java"][i % 5],
  updated_at: new Date().toISOString(),
  fork: false,
  topics: ["web", "open-source", "demo", "pagination"],
}));
