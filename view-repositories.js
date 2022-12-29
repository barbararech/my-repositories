"use strict";

const { Octokit, App } = require("octokit");

module.exports.handle = async (event, context) => {
  const octokit = new Octokit({});

  try {
    const repositories = await octokit.request("GET /users/{owner}/repos", {
      owner: "barbararech",
    });

    return { statusCode: 200, repositories: repositories.data };
  } catch (error) {
    return error;
  }
};
