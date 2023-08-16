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

export asyn function getLanguages(name: string) {
  try {
    const repoData = await octokit.request("GET /repos/{owner}/{repo}", { owner: 'newbpydev', repo: name });
    console.log(repoData)
  } catch (error) {
    console.log(error)
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
