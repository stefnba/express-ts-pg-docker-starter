# Why this Starter?

This is a simple starter backend repo for Node & Express with TypeScript. It uses Postgresql as a database and all services are containerized with Docker.

# Setting up project

-   [Link to complete Tutorial](https://cloudnweb.dev/2019/09/building-a-production-ready-node-js-app-with-typescript-and-docker/)

## Setup Node

```bash
npm init -y
```

## Setup TypeScript

```bash
tsc --init
```

## Activate ESLint

```bash
eslint --init
```

Can also use VS Code command: `Restart ESLint Server`

Additional links with more info:

-   https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/
-   https://blog.logrocket.com/linting-typescript-using-eslint-and-prettier/
-   https://khalilstemmler.com/blogs/tooling/prettier/

## Configure GitHub

To follow best practices, the main branch should be protected to prevent commits. Only Pull Requests can merge into main. Inside the repo on GitHub, click on `Settings` and then `Branches` to add a branch protection rule and click the following 2 options:

-   `Require a pull request before merging`
-   `Do not allow bypassing the above settings`

## Development & Testing

## Git Workflows

The suggested git strategy is to use the Gitflow workflow. Fore more details, see [this](https://nvie.com/posts/a-successful-git-branching-model/) or [this](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) article.

There are 3 key branches

-   Main
-   Dev
-   Feature branches

# Deployment

To come

# Docker

## Build image

Run the following command to buld and tag a Docker image:

```bash
docker build . -f [path-to-Dockerfile] -t [username]/[image-name]:[tag]
```

## Push image

The following command pushes the image to Docker Hub:

```bash
docker push [username]/[image-name]:[tag]
```

## Simplify image build and push

To make the build and push worfklow more efficient, a `build.sh` script is added to the `/scripts/docker` folder.

## GitHub Action

### Test locally

```bash
 act -j deploy --secret-file .env
```
