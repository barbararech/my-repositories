# My Repositories #

### What is this repository for? ###

This repository allows you to get all of the GitHub repositories of barbararech.

### How do I get set up? ###

First, clone this repository:

```
git clone https://barbararech@bitbucket.org/barbararech/my-repositories.git
```

Inside the folder, run the following command to install the dependencies.

```
npm install
```

Run the following command to install the dev dependencies.

```
npm install -D eslint eslint-plugin-import git-list-updated prettier 
```
Configure your AWS  credentials

```
sls config credentials -o --provider aws --key <your-key> --secret <your-secret> 
```

To deploy in AWS Lambda use 

```
npm run deploy
```

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact