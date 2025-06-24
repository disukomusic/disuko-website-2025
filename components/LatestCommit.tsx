import React, { useEffect, useState } from 'react';

export function LatestCommit() {
    const [commit, setCommit] = useState<{
        title: string;
        date: string;
        url: string;
    } | null>(null);

    useEffect(() => {
        async function fetchLatestCommit() {
            try {
                const owner = 'disukomusic';
                const repo = 'disuko-website-2025';
                const branch = 'main';

                const response = await fetch(
                    `https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}&per_page=1`
                );
                const data = await response.json();

                if (Array.isArray(data) && data.length > 0) {
                    const latest = data[0];
                    const date = new Date(latest.commit.author.date);
                    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
                    const title = latest.commit.message.split('\n')[0];
                    const url = latest.html_url;

                    setCommit({ title, date: formattedDate, url });
                }
            } catch (err) {
                console.error('Error fetching latest commit:', err);
            }
        }

        fetchLatestCommit();
    }, []);

    if (!commit) return <div>Loading latest commit...</div>;

    return (
        <div>
            <strong>Last updated:</strong> {commit.date}
            <br />
            <a href={commit.url} target="_blank" rel="noopener noreferrer">
                <strong>{commit.title}</strong>
            </a>
        </div>
    );
}
