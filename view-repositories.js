import { Octokit } from "octokit";

export async function handle() {
  const octokit = new Octokit({});

  try {
    const { data } = await octokit.request("GET /users/{owner}/repos", {
      owner: "barbararech",
    });

    const processedData = processRepositoriesData(data);

    return {
      statusCode: 200,
      body: JSON.stringify({
        owner: data[0].owner.login,
        profile_url: data[0].owner.html_url,
        repositories: processedData,
      }),
    };
  } catch (error) {
    return error;
  }
}

function processRepositoriesData(data) {
  return data.map((repository) => {
    return {
      name: repository.name,
      description: repository.description,
      created_at: repository.created_at,
    };
  });
}
