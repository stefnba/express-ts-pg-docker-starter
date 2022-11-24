# Starter template for Node & Express, TypeScript, Postgres and Docker

## Setting up project

-   [Link to Tutorial](https://cloudnweb.dev/2019/09/building-a-production-ready-node-js-app-with-typescript-and-docker/)

npm init --yes
tsc --init

### ESLint and Prettier

To activate ESLint, run the following command in the terminal:

```bash
eslint --init
```

Can also use VS Code command: `Restart ESLint Server`

-   https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/
-   https://blog.logrocket.com/linting-typescript-using-eslint-and-prettier/
-   https://khalilstemmler.com/blogs/tooling/prettier/

## Git Workflows

Fore more details, see this [article](https://nvie.com/posts/a-successful-git-branching-model/)

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
