"use strict";

const { Octokit, App } = require("octokit");

module.exports.handle = async (event, context) => {
  const octokit = new Octokit({});

  try {
    const { data } = await octokit.request("GET /users/{owner}/repos", {
      owner: "barbararech",
    });

    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (error) {
    return error;
  }
};
