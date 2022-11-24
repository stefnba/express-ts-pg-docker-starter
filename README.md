# starter template for Node & Express, TypeScript, Postgres and Docker

## Setting up project

-   [Link to complete Tutorial](https://cloudnweb.dev/2019/09/building-a-production-ready-node-js-app-with-typescript-and-docker/)

#### Setup Node

```bash
npm init -y
```

#### Setup TypeScript

```bash
tsc --init
```

#### Activate ESLint

```bash
eslint --init
```

Can also use VS Code command: `Restart ESLint Server`

Additional links with more info:

-   https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/
-   https://blog.logrocket.com/linting-typescript-using-eslint-and-prettier/
-   https://khalilstemmler.com/blogs/tooling/prettier/

## Git Workflows

The suggest git strategy is to use the Gitflow workflow. Fore more details, see this [article](https://nvie.com/posts/a-successful-git-branching-model/) or this [article](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

### Main or Master branch

### Development branch

## Deployment

To come

## Docker

### Build image

Run the following command to buld and tag a Docker image:

```bash
docker build . -f [path-to-Dockerfile] -t [username]/[image-name]:[tag]
```

### Push image

The following command pushes the image to Docker Hub:

```bash
docker push [username]/[image-name]:[tag]
```

### Simplify image build and push

To make the build and push worfklow more efficient, a `build.sh` script is added to the `/scripts/docker` folder.
