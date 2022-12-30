"use strict";
const { Octokit, App } = require("octokit");

module.exports.handle = async (event, context) => {
  const octokit = new Octokit({});

  try {
    const { data } = await octokit.request("GET /users/{owner}/repos", {
      owner: "barbararech",
    });

    const processedData = processRepositoriesData(data);

    return { statusCode: 200, body: JSON.stringify(processedData) };
  } catch (error) {
    return error;
  }
};

function processRepositoriesData(data) {
  return data.map((repository) => {
    return {
      nome: repository.name,
      descrição: repository.description,
      dataDeCriação: repository.created_at,
    };
  });
}
