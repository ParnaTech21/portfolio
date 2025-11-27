import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Stats = { followers: number; following: number; public_repos: number; totalStars: number };

export default function GitHubContributions({ username = "ParnaTech21" }: { username?: string }) {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function getStats() {
      try {
        const res = await fetch(`/api/github?user=${username}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        if (!cancelled) setStats({ followers: data.followers, following: data.following, public_repos: data.public_repos, totalStars: data.totalStars });
      } catch (e) { console.error(e); } finally { if (!cancelled) setLoading(false); }
    }
    getStats();
    return () => { cancelled = true; };
  }, [username]);

  const chartSrc = `https://ghchart.rshah.org/${encodeURIComponent(username)}`;

  return (
    <section className="container py-8">
      <div className="section-title"><span className="icon-wrap p-3 card rounded-full">🐙</span> <span className="ml-2">GitHub Contributions</span></div>

      <div className="mt-6 contrib-wrapper">
        <div className="overflow-auto">
          <motion.img initial={{ opacity: 0.6 }} animate={{ opacity: 1 }} src={chartSrc} alt={`${username} GitHub contributions`} className="mx-auto"/>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {loading ? (
            <div className="col-span-4 text-center text-gray-400">Loading stats…</div>
          ) : (
            <>
              <motion.div className="card p-4 text-center" whileHover={{ scale: 1.02 }}>
                <div className="text-sm text-gray-300">Followers</div>
                <div className="text-xl font-semibold mt-2">{stats?.followers ?? 0}</div>
              </motion.div>

              <motion.div className="card p-4 text-center" whileHover={{ scale: 1.02 }}>
                <div className="text-sm text-gray-300">Following</div>
                <div className="text-xl font-semibold mt-2">{stats?.following ?? 0}</div>
              </motion.div>

              <motion.div className="card p-4 text-center" whileHover={{ scale: 1.02 }}>
                <div className="text-sm text-gray-300">Love Count</div>
                <div className="text-xl font-semibold mt-2">{stats?.totalStars ?? 0}</div>
              </motion.div>

              <motion.div className="card p-4 text-center" whileHover={{ scale: 1.02 }}>
                <div className="text-sm text-gray-300">Repos</div>
                <div className="text-xl font-semibold mt-2">{stats?.public_repos ?? 0}</div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}