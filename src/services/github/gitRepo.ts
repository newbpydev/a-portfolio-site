import { Octokit } from "octokit";
const octokit = new Octokit({ auth: import.meta.env.VITE_GITHUB_TOKEN });

export async function getRepo(name: string) {
  try {
    const repoData = await octokit.request(`GET /repos/{owner}/{repo}`, {
      owner: "newbpydev",
      repo: "01-expanding-cards",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    const repoLanguages = await octokit.request(
      "GET /repos/{owner}/{repo}/languages",
      {
        owner: "newbpydev",
        repo: "01-expanding-cards",
      }
    );

    console.log(repoData, repoLanguages);
  } catch (error) {
    console.log(error);
  }
}

export async function getLanguages(name: string) {
  try {
    const repoData = await octokit.request("GET /repos/{owner}/{repo}", {
      owner: "newbpydev",
      repo: name,
    });
    console.log(repoData);
  } catch (error) {
    console.log(error);
  }
}

export async function getRepos() {
  try {
    const repos = await octokit.request("GET /users/{username}/repos", {
      username: "newbpydev",
      per_page: 50,
      sort: "updated",
    });
    console.log(repos.headers.link, repos.data);
  } catch (error) {
    console.log(error);
  }
}

interface Language {
  [key: string]: number;
}
interface Languages {
  langs: Language[];
}

// TODO: Come back later and get this code to work, Token limit problems
export async function getUserLanguages() {
  try {
    const languages: Language[] = [];

    const repos = await octokit.request("GET /users/{username}/repos", {
      username: "newbpydev",
      per_page: 200,
    });
    const data = repos.data;
    console.log("🚀 ~ file: gitRepo.ts:62 ~ getUserLanguages ~ data:", data);

    for (const langUrl of data) {
      const res = await fetch(langUrl.languages_url);
      const dataRes = await res.json();
      // console.log(res);
      console.log(dataRes);
    }

    console.log({ repos });
  } catch (error) {
    console.log(error);
  }
}

export async function getRateLimit() {
  try {
    const rateLimit = await octokit.request("GET /rate_limit", {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    console.log(rateLimit);
  } catch (error) {
    console.error(error);
  }
}
