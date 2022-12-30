import { Octokit } from 'octokit';

export default async function handle() {
  const octokit = new Octokit({});

  try {
    const { data } = await octokit.request('GET /users/{owner}/repos', {
      owner: 'barbararech',
    });

    const processedData = data.map(({name, description, created_at}) => {
      return {
        name,
        description,
        created_at,
      };
    });

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
