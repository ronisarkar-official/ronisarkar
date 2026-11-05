export interface Activity {
	date: string;
	count: number;
	level: 0 | 1 | 2 | 3 | 4;
}

type GitHubContributionsResponse = {
	total: { [year: string]: number };
	contributions: Activity[];
};

const GITHUB_USERNAME = "ronisarkar-official";

export async function getGitHubContributions(): Promise<Activity[]> {
	try {
		const res = await fetch(
			`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
			{
				next: { revalidate: 3600 }, // Cache for 1 hour (3600 seconds) - updates more frequently
			},
		);
		if (!res.ok) {
			console.error(`[GitHub Contributions] HTTP error ${res.status}`);
			return [];
		}
		const data = (await res.json()) as GitHubContributionsResponse;
		return data?.contributions || [];
	} catch (error) {
		console.error('[GitHub Contributions] Error fetching data:', error);
		return [];
	}
}
