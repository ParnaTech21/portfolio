import type { NextApiRequest, NextApiResponse } from "next";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "ParnaTech21";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";

async function fetchJSON(url: string) {
  const res = await fetch(url, GITHUB_TOKEN ? { headers: { Authorization: `token ${GITHUB_TOKEN}` } } : undefined);
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  return res.json();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const username = (req.query.user as string) || GITHUB_USERNAME;
    const user = await fetchJSON(`https://api.github.com/users/${username}`);
    const repos = await fetchJSON(`https://api.github.com/users/${username}/repos?per_page=100`);
    const totalStars = Array.isArray(repos) ? repos.reduce((sum: number, r: any) => sum + (r.stargazers_count || 0), 0) : 0;
    res.status(200).json({ username, followers: user.followers ?? 0, following: user.following ?? 0, public_repos: user.public_repos ?? 0, totalStars });
  } catch (err: any) {
    res.status(500).json({ error: err.message || "unknown error" });
  }
}