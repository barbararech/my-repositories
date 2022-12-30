"use strict";
const { Octokit } = require("octokit");

module.exports.handle = async () => {
  const octokit = new Octokit({});

  try {
    const { data } = await octokit.request("GET /users/{owner}/repos", {
      owner: "barbararech",
    });

    const processedData = processRepositoriesData(data);

    return {
      statusCode: 200,
      body: JSON.stringify({
        owner: "Bárbara Rech",
        repositories: processedData,
      }),
    };
  } catch (error) {
    return error;
  }
};

function processRepositoriesData(data) {
  return data.map((repository) => {
    return {
      name: repository.name,
      description: repository.description,
      created_at: repository.created_at,
    };
  });
}
